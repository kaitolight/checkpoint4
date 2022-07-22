const { hashPassword } = require("../helpers/argon");
const { validateUser } = require("../utils/validate");
const user = require("../models/user");

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

exports.login = async (req, res) => {
  const rememberTime = () => {
    return 86400000;
  };
  try {
    const userData = await user.login(req.body);
    if (!userData.code) {
      res
        .status(200)
        .cookie("userToken", userData.accessToken, {
          httpOnly: false,
          expires: new Date(Date.now() + rememberTime()),
        })
        .json({
          message: "Connexion réussie",
          type: userData.role,
          id: userData.id,
        });
    } else {
      res.status(userData.code).json({ message: userData.message });
    }
  } catch (error) {
    console.warn(error);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("userToken").sendStatus(200);
};

exports.getAll = async (req, res) => {
  const users = await user.findAll();
  res.status(200).send({ users });
};

exports.getOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const oneUser = await user.findOne(userId);
  res.status(200).send({ oneUser });
};

exports.updateOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  const message = await user.updateOne(userId, req.body);

  res.status(200).json(message);
};

exports.deleteOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  const message = await user.deleteOne(userId);

  res.status(200).json(message);
};
