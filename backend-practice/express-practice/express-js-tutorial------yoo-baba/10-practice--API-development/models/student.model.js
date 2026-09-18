import mongoose from "mongoose";    


// // 1. Define the Schema Structure
const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "Other"],
        require: true,
    },
    profilePicture: {
        type: String
    }
});



// // 2. Compile the Schema into a Model
const Student = mongoose.model('Student', studentSchema);



// module.exports = Student; // es5
export default Student;