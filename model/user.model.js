    import mongoose from "mongoose";
    const userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
  


    },{timestamps: true})
    export const usermodel =mongoose.model('user',userschema)