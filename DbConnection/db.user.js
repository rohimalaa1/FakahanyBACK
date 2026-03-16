import mongoose from "mongoose";

export function dbconect() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("db connected");
    
}).catch((err)=>{
    console.log(err);
    
})
}