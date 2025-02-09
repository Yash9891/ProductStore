import mongoose from "mongoose";
export const connectDB =async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongo db connected :${conn.connection.host}`);

    }catch(error){
console.log(`Error :${error.message}`);
process.exit(1);
    }
}