import mongoose from "mongoose";

export function dbconect() {
    mongoose.connect("mongodb+srv://rohimalaa1_db_user:eU0vL8AUyl3NGMKU@fakahany.ircbmj9.mongodb.net/?appName=Fakahany").then(()=>{
    console.log("db connected");
    
}).catch((err)=>{
    console.log(err);
    
})
}