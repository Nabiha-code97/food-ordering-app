import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        minlength: 3,
        maxlength: 60
    },
    addressLine1: {
        type: String,
        minlength: 3,
        maxlength: 100
    },
    city: {
        type: String,
        minlength: 3,
        maxlength: 60
    },
    country: {
        type: String,
        minlength: 3,
        maxlength: 60
    }

});
const User =    mongoose.model("User", userSchema);
export default User; 