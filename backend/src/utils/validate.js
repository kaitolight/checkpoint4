const Joi = require("joi");

exports.validateUser = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    pseudo: Joi.string().min(3).max(100).presence(presence),
    email: Joi.string().email().max(100).presence(presence),
    password: Joi.string().min(8).max(255).presence(presence),
    role: Joi.string().valid("admin").max(100).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateProject = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    name: Joi.string().min(3).max(100).presence(presence),
    description: Joi.string().presence(presence),
    image: Joi.string().presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};
