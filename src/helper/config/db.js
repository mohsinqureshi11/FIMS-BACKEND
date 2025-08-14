import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect( "mongodb+srv://mq0062783:XJPD0AK24nQkgCzm@cluster0.hyms1gg.mongodb.net");
        console.log("MongoDb Connection SuccessFully");
    } catch (error) {
        console.log("Error in MongoDb Connection =>", error);
    }
};
export default connect;


// database ko project me connect krega;
// const connect = mongoose.connect(process.env.MONGODB ,{
//     useNewUrlParser : true,
//     useUnifiedTopology:true
// })
// .then(()=> console.log("MongoDb Connection SuccessFully "))
// .catch((error)=> console.log("Error in MongoDb Connection =>",error))

// export default connect;

