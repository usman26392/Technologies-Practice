import mongoose from "mongoose";


interface IContactForm {
    name: string;
    email: string;
    message: string;
    createdAt?: Date;
    updatedAt?: Date;
}


const contactFormSchema = new mongoose.Schema<IContactForm>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        message: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);


// 
const ContactFormModel = mongoose.model<IContactForm>('ContactForm', contactFormSchema);

export default ContactFormModel;