import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    businessEmailAddress : String,
    companyName : String,
    fullName : String,
    user_password : String,
    user_email : String
})

export let User = mongoose.models.user || mongoose.model("user" , userSchema);