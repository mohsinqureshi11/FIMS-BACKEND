import http from 'http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connect from './src/helper/config/db.js';
import officerRoute from "./src/api/officer/route.js";
import formRoute from "./src/api/form/route.js";

const app = express();

app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

// Improved CORS configuration
const corsOptions = {
  origin: [
    "https://fieldinspectionmanagmentsystem.netlify.app",
    "http://localhost:5173", // For local development
    "http://localhost:3000"  // Alternative local port
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Connect to MongoDB
connect();

// Routes
app.use("/createOfficer", officerRoute);
app.use("/officerapi", officerRoute);
app.use("/formapi", formRoute);

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "FIMS Server is running",
    timestamp: new Date().toISOString(),
    status: "healthy"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Start server
const port = process.env.PORT || 8005;
const server = http.createServer(app).listen(port, () => {
  console.log("✅ FIMS server is running on Port ===>>", port);
  console.log("🌐 Server URL: http://localhost:" + port);
});
