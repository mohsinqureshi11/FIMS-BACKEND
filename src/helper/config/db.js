import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect( "mongodb+srv://mq0062783:mFVLC8UI2P2jIkI@cluster0.hyms1gg.mongodb.net/");
        console.log("MongoDb Connection SuccessFully");
    } catch (error) {
        console.log("Error in MongoDb Connection =>", error);
    }
};

export default connect;
