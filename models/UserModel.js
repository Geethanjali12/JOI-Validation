const Joi = require('joi');

const userSchema = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string(),
    lastName: Joi.string().required(),
    userName: Joi.string().alphanum().min(5).max(25).required(),
    email: Joi.string().email().required(),
    age: Joi.number().required().min(1).max(100),
    dateOfBirth: Joi.date().greater(new Date("1940-01-01")).required(),
    address: Joi.string().required(),
    phoneNumber: Joi.string().length(10).pattern(/^[6-9]\d{9}$/).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")).required(),
    confirmPassword: Joi.ref("password")
});

module.exports = userSchema;