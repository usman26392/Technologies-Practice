import mongoose from "mongoose";    
import mongoosePaginate from "mongoose-paginate-v2";


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

contactSchema.plugin(mongoosePaginate);


// 2. Compile the Schema into a Model
const Contact = mongoose.model('Contact', contactSchema);



// module.exports = Contact; // es5
export default Contact;