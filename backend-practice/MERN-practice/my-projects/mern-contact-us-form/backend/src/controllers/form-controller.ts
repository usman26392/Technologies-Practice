
import { type Request, type Response } from "express";
import ContactFormModel from "../models/contact-form-model.ts";
import { z } from "zod";


export const ContactSchema = z.object({
    name: z.string().min(2),
    email: z.email("Invalid email format"),
    message: z.string().min(20)
});



export default async function createContactForm(req: Request, res: Response) {
    // res.send("Request received");
    // console.log("Request body", req.body);

    try {


        // Dummy Testing
        // const { name, email, message } = req.body;
        // if (!name || !email || !message) {
        //     return res.status(400).json({ message: "Please provide all the fields" })
        // }
        // else {
        //     res.status(201).json({ message: "Form submitted successfully" });
        // }

        // 1. Validate format with Zod firstt
        const validateData = ContactSchema.parse(req.body);
        // console.log("Validated data", validateData);



        // 2. Attempt to save to Mongoose
        const newContact = new ContactFormModel(validateData);
        await newContact.save();
        return res.status(201).json({ message: "Form submitted successfully" })

    } catch (error: any) {
        // 3. Catch Zod Validation Errors
        // I am controlling this error in my frontend side so i am commenting this out
        // if (error instanceof z.ZodError) {
        //     return res.status(400).json({ errors: error.issues });
        // }

        // 4. Catch MongoDB Unique Index Errors (E11000)
        if (error.code === 11000) {
            return res.status(400).json({
                message: "This email is already in use."
            });
        }
        return res.status(500).json({ message: "Error creating form" });
    }

}