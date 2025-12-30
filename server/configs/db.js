import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on('connected', () => console.log('Database Connected'))
        await mongoose.connect(`${process.env.MONGODB_URI}/Shortly`)
    }
    catch(err){
        console.log('Database connection failed', err.message)
    }
}

export default connectDB;