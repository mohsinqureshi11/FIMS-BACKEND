import http from 'http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connect from './src/helper/config/db.js';
import officerRoute from "./src/api/officer/route.js";

const app = express();

app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

const corsOptions = {
  origin: "https://fieldinspectionmanagmentsystem.netlify.app",
  credentials: true, // ✅ lowercase 'c'
  optionsSuccessStatus: 200 // ✅ correct spelling
};

app.use(cors(corsOptions));

// Routes
app.use("/createOfficer", officerRoute);
app.use("/officerapi", officerRoute);

// Test route
app.get("/", (req, res) => {
  res.status(200).send("FIMS Server is running ==>>");
});

// Start server
const port = process.env.PORT || 8005;
const server = http.createServer(app).listen(port, () => {
  console.log("Our FIMS server is running on Port ===>>", port);
});
