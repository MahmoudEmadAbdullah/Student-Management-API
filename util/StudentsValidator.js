const z = require('zod');


const Schemas = {

    
    //Schema For Create new student
    create_schema: z.object({
        name: z.string().regex(/^[A-Z][a-z]*$/, "Name must start with a capital letter and contain only letters"),
        dept: z.enum(["SA", "SD", "MD", "PD", "EB", "GA", "GD", "SAP"]),
    }),


    //Schema For dealing with students by id
    id_schema: z.object({
        id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format"),
    }),
};

module.exports = Schemas;