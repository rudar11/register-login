import mongoose from "mongoose";

async function connectdb() {
 try {
       await mongoose.connect(process.env.MONGODB_URI)
       console.log("database is connected")
 } catch (error) {
    console.log(error)
 }
}

export default connectdb