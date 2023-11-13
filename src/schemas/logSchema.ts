import Joi from 'joi';

export const logSchema = Joi.object({
  message: Joi.string().required(),
});
