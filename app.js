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

import cors from "cors";

app.use(cors({
  origin: process.env.FRONTEND_URL,  // dynamic frontend URL from .env
  credentials: true,                  // spelling fix
  optionsSuccessStatus: 200           // spelling fix
}));


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
