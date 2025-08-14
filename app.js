import http from 'http';
import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import connect from './src/helper/config/db.js';
import officerRoute from "./src/api/officer/route.js"


const app = express();

app.use(express.json({limit:"200mb"}))   
app.use(express.urlencoded({limit:"200mb",extended:true}))

const corsOptions ={
    origin : "https://fieldinspectionmanagmentsystem.netlify.app",
    Credential:true,
    optionSuccessStatus:200 
}

app.use(cors(corsOptions));


app.use("/createOfficer",officerRoute);
app.use("/officerapi", officerRoute)

const port = process.env.PORT || 8005;

connect().then(()=>{
    app.listen(port,()=>{
        console.log("server is running port is ",port);
    })
})

// app.listen(port,()=>{
//         console.log("server is running port is ",port);
//     })
