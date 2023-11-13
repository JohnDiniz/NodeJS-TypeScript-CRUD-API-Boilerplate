import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import logger from '@/utils/logger';

export const validateBody = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.map((detail) => detail.message);

      logger.error(`Validation error: ${validationErrors.join(', ')}`);

      return res.status(400).json({ message: 'Validation error', errors: validationErrors });
    }

    return next();
  };
};
