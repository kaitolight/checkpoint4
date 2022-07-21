/* eslint-disable no-unused-vars */
const { Prisma } = require("@prisma/client");
const {
  hashPassword,
  verifyPassword,
  verifyHash,
} = require("../helpers/argon");
const { verifyAccessToken } = require("../helpers/jwt");
const { validateUser } = require("../utils/validate");
const user = require("../models/UserManager");

exports.createOne = async (req, res) => {
  const { pseudo, email, password, role } = req.body;
  const error = validateUser({
    pseudo,
    email,
    password,
    role,
  });
  if (error) {
    res.status(422).json(error);
  }
  const hashedPassword = await hashPassword(password);
  const message = await user.createOne({
    pseudo,
    email,
    hashedPassword: hashedPassword.toString(),
    role,
  });

  res.status(201).json(message);
};
