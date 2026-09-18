import mongoose from "mongoose";    


// // 1. Define the Schema Structure
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});



// // 2. Compile the Schema into a Model
const User = mongoose.model('User', userSchema);



// module.exports = User; // es5
export default User;