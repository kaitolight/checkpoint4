const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient();

exports.createOneProject = async (project) => {
  try {
    return await prisma.project.create({
      data: { ...project },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAllProjects = async (userId) => {
  try {
    return await prisma.project.findMany({ where: { userId } });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getOneProject = async (userId, projectId) => {
  try {
    return await prisma.project.findFirst({
      where: { userId, id: projectId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateOneProject = async (projectId, data) => {
  try {
    const project = await prisma.project.update({
      where: { id: projectId },
      data: { ...data },
    });
    return project;
  } finally {
    await prisma.$disconnect();
  }
};

exports.deleteOneProject = async (projectId) => {
  try {
    return await prisma.project.delete({ where: { id: projectId } });
  } finally {
    await prisma.$disconnect();
  }
};
