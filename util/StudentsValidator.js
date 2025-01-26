const z = require('zod');


const StudentSchemas  = {

    // Schema for creating new student documents in MongoDB 
    studentCreateSchema: z.object({
        firstName: z.string()
            .min(1, "First name cannot be empty")
            .regex(/^[A-Z][a-zA-Z'-]*$/,
"First name must start with a capital letter and contain only letters, hyphens, or apostrophes"),

        lastName: z.string()
            .min(1, "Last name cannot be empty")
            .regex(/^[A-Z][a-zA-Z'-]*$/,
"Last name must start with a capital letter and contain only letters, hyphens, or apostrophes"),

        department: z.string()
            .min(2,"Department must be at least 2 characters long")
            .max(15, "Department cannot be longer than 15 characters")
            .refine( value => ["Math", "Physics", "CS", "IT"].includes(value), {
                message: "Department must be one of: Math, Physics, CS, IT"
            }),
    }).strict(),


    // Schema for Update new student documents in MongoDB 
    studentUpdateSchema: z.object({
        firstName: z.string()
            .min(1, "First name cannot be empty")
            .regex(/^[A-Z][a-zA-Z'-]*$/, "First name must start with a capital letter")
            .optional(),
        lastName: z.string()
            .min(1, "Last name cannot be empty")
            .regex(/^[A-Z][a-zA-Z'-]*$/, "Last name must start with a capital letter")
            .optional(),
        department: z.string()
            .min(2, "Department must be at least 2 characters")
            .max(15, "Department cannot be longer than 15 characters")
            .refine(value => ["CS", "IT", "Math", "Physics"].includes(value), {
                message: "Department must be one of: CS, IT, Math, Physics"
            })
            .optional(),
    }),


    // Schema for validating MongoDB document IDs
    mongoIdSchema: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ID format"),
};


module.exports = StudentSchemas;