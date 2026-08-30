
import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email("Invalid email format"), // Built-in email validation
  message: z.string().min(10)
});



app.post('/contact', async (req, res) => {
  try {
    // 1. Validate format with Zod first
    const validatedData = ContactSchema.parse(req.body);

    // 2. Attempt to save to Mongoose
    const newContact = new ContactForm(validatedData);
    await newContact.save();

    res.status(201).json({ message: "Saved!" });
  } catch (error: any) {
    // 3. Catch Zod Validation Errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }

    // 4. Catch MongoDB Unique Index Errors (E11000)
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: "This email is already in use." 
      });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
});
