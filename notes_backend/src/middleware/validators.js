const Joi = require('joi');

const noteSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(5).required(),
  tags: Joi.array().items(Joi.string()),
});

const validateNote = (req, res, next) => {
  const { error } = noteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: error.details.map((d) => d.message),
    });
  }
  next();
};

module.exports = { validateNote };
