const project = require("../models/project");
const { findOne } = require("../models/user");
const { validateProject } = require("../utils/validate");

exports.createOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const existingUser = await findOne(userId);
  if (!existingUser) {
    return res.status(404).send(`User #${existingUser} not found.`);
  }

  const error = validateProject(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const projectCreated = await project.createOneProject({
      ...req.body,
      userId,
    });
    return res.status(201).send(projectCreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème lors de la création du projet" });
  }
};

exports.getAll = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  try {
    const projectList = await project.getAllProjects(userId);
    return res.status(201).send(projectList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des projets" });
  }
};

exports.getOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);
  try {
    const oneProject = await project.getOneProject(userId, projectId);
    return res.status(201).send(oneProject);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du projet" });
  }
};

exports.getOneWithoutId = async (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);
  try {
    const oneProject = await project.getOneProjectWithoutId(projectId);
    return res.status(201).send(oneProject);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du projet" });
  }
};

exports.updateOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);

  const error = validateProject(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  const oneProject = await project.getOneProject(userId, projectId);
  if (!oneProject) {
    res.status(404).send({ erreur: "Impossible de trouver le projet" });
  }

  try {
    const updateProject = await project.updateOneProject(projectId, req.body);
    return res.status(201).send(updateProject);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du projet" });
  }
};

exports.deleteOne = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const projectId = parseInt(req.params.projectId, 10);

  const oneProject = await project.getOneProject(userId, projectId);
  if (!oneProject) {
    res.status(404).send({ erreur: "Impossible de trouver le projet" });
  }

  try {
    await project.deleteOneProject(projectId);
    return res.status(200).send("Le projet a été supprimé");
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de suppression du projet" });
  }
};
