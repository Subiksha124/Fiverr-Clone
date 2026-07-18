import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Api is running");
});

const PORT=process.env.PORT||5000;
const connectDB=async()=>{
try{
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
}
catch(error){
    console.log(error);
}
}
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
connectDB();
