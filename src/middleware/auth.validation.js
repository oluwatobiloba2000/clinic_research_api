/* eslint-disable max-len */
import Joi from 'joi';

const validate = {
  login: (username, password) => {
    const JoiSchema = Joi.object({
      username: Joi.string().min(3).required(),
      password: Joi.string().min(5).required(),
    });

    return JoiSchema.validate({ username, password });
  },

  signup: (username, password, firstname, phone, email) => {
    const JoiSchema = Joi.object({
      username: Joi.string().min(3).required(),
      password: Joi.string().min(5).required(),
      firstname: Joi.string().min(3).required(),
      phone: Joi.string().min(8).required(),
      email: Joi.string().email().required(),
    });

    return JoiSchema.validate({
      username, password, firstname, phone, email,
    });
  },
};

export default validate;
