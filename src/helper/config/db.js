import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDb Connection SuccessFully");
    } catch (error) {
        console.log("Error in MongoDb Connection =>", error);
    }
};

export default connect;
