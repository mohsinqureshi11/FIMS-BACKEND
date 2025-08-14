import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()   //env k envirnment variable ko access krna hai;

// database ko project me connect krega;
const connect = mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser : true,
    useUnifiedTopology:true
})
.then(()=> console.log("MongoDb Connection SuccessFully "))
.catch((error)=> console.log("Error in MongoDb Connection =>",error))

export default connect;