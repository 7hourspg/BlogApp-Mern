import mongoose from "mongoose";
const connectDB=()=>{
    return (mongoose.connect('mongodb://localhost:27017')
    .then(()=>{
        console.log("connected to DB sucessfully")
    })
    .catch((error)=>{
        console.log(error);
    }))
}
export default connectDB