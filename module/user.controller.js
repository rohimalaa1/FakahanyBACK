    import { usermodel } from "../model/user.model.js";
    import bcrypt from "bcrypt";
    export const signup=async(req,res)=>{
        const{name,email,password,confirmPassword }=req.body
         if (password !== confirmPassword) {
    return res.json({message:"Passwords do not match"});
  }
    const user=await usermodel.findOne({email})
    if (user) {
    res.json({message:"email already exist"})
    }else{
        
        bcrypt.hash(password,8).then(async function(hash) {
      await usermodel.insertMany({name,email,password:hash,confirmPassword: hash})
      res.json({message:"success"})
});
    
    }

    }

    export const signin=async(req,res)=>{
     const {email,password}=req.body
     const user=await usermodel.findOne({email})
     if (user) {
           const match = await bcrypt.compare(password, user.password);

              if (match) {
                res.json({message:"Login success"})
              }else{
                 res.json({message:"password or email incorect"})
              }
     }else{
         res.json({message:"Account Not Found"})
     }
    }