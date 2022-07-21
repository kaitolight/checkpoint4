const { PrismaClient } = require("@prisma/client");
const jwt = require("../helpers/jwt");
const argon = require("../helpers/argon");

const prisma = new PrismaClient();

const createOne = async (user) => {
  try {
    return await prisma.user.create({
      data: { ...user },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const findOne = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const findOneByEmail = async (userEmail) => {
  try {
    return await prisma.user.findUnique({
      where: { email: userEmail },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOne = async (userId, payload) => {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data: payload,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (userId) => {
  try {
    return await prisma.user.delete({
      where: { id: userId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const login = async (userData) => {
  const { email, password } = userData;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return {
      code: 401,
      message: "Les informations sont incorrectes ou le compte n'existe pas.",
    };
  }
  const checkPassword = await argon.verifyPassword(
    password,
    user.hashedPassword
  );
  if (!checkPassword) {
    return {
      code: 401,
      message: "Les informations sont incorrectes ou le compte n'existe pas.",
    };
  }
  delete user.hashedPassword;

  const id = await findOne(user.id);
  const accessToken = await jwt.signAccessToken({
    user,
    id,
  });
  return { ...user, id, accessToken };
};

module.exports = {
  createOne,
  findOne,
  updateOne,
  deleteOne,
  findOneByEmail,
  login,
};
