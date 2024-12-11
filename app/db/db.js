import mongoose from "mongoose";

export function connectIt(){
    mongoose.connect("mongodb://127.0.0.1:27017/userAuthentication").then((connection)=>{
        console.log(connection)
        console.log("db connected ho gai ha ");
   
      
        
    })  .catch((error) => {
        console.error("Error connecting to DB:", error);
    });
}



