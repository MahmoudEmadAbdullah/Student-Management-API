const z = require('zod');
const validator = require('validator')

const registrationSchema  = z.object({
    name: z
    .string()
    .min(2)
    .max(20),
    email: z
    .string()
    .refine((val) => validator.isEmail(val), {
        message: "Please enter a valid email address",
    }),
    isAdmin: z
    .boolean()
    .optional(),
    password: z
    .string()
    .min(8)
    .max(32)
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
}).strict();


module.exports = {registrationSchema};