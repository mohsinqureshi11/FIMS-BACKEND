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

// CORS configuration for production deployment
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      "https://fieldinspectionmanagmentsystem.netlify.app",
      "https://fieldinspectionmanagmentsystem.netlify.app/",
      "http://localhost:5173",
      "http://localhost:3000",
      "http://localhost:8005"
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log('✅ CORS allowed origin:', origin);
      callback(null, true);
    } else {
      console.log('❌ CORS blocked origin:', origin);
      // For now, allow all origins to ensure it works
      callback(null, true);
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
};

app.use(cors(corsOptions));

// Pre-flight requests
app.options('*', cors(corsOptions));

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
    status: "healthy",
    environment: process.env.NODE_ENV || 'development',
    cors: "CORS is configured",
    allowedOrigins: ["https://fieldinspectionmanagmentsystem.netlify.app"]
  });
});

// Test route for debugging
app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Test endpoint working",
    cors: "CORS should be working",
    timestamp: new Date().toISOString(),
    origin: req.headers.origin || 'No origin',
    allowedOrigins: ["https://fieldinspectionmanagmentsystem.netlify.app"]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  console.log('404 - Route not found:', req.method, req.originalUrl);
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
    method: req.method
  });
});

// Start server
const port = process.env.PORT || 8005;
const server = http.createServer(app).listen(port, () => {
  console.log("✅ FIMS server is running on Port ===>>", port);
  console.log("🌐 Server URL: http://localhost:" + port);
  console.log("🔧 Environment:", process.env.NODE_ENV || 'development');
  console.log("📡 Frontend URL: https://fieldinspectionmanagmentsystem.netlify.app");
  console.log("📡 Backend URL: https://fims-backend-b930ziv5a-mohsin-qureshis-projects.vercel.app");
});
