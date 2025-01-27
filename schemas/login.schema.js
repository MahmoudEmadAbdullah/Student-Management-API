const z = require('zod');
const validator = require('validator');

const authSchema = z.object({

    email: z
    .string()
    .refine((val) => validator.isEmail(val), {
        message: "Please enter a valid email address"
    }),

    password: z
    .string()
    .min(8)
    .max(32)
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)

}).strict();

module.exports = {authSchema};