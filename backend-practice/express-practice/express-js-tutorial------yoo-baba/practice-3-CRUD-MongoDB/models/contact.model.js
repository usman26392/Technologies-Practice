import mongoose from "mongoose";    

// 1. Define the Schema Structure
const contactSchema = mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
});



// 2. Compile the Schema into a Model
const Contact = mongoose.model('Contact', contactSchema);

// module.exports = Contact; // es5
export default Contact;