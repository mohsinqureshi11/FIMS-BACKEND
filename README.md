# FIMS Backend

Field Inspection Management System Backend API

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Vercel account (for deployment)

### Local Development Setup

1. **Clone and Install Dependencies**
   ```bash
   cd FIMS-Backend
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URL=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database?retryWrites=true&w=majority
   PORT=8005
   NODE_ENV=development
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

### MongoDB Atlas Setup

1. **Create MongoDB Atlas Cluster**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a new cluster
   - Choose your preferred cloud provider and region

2. **Database Access**
   - Create a database user with read/write permissions
   - Note down username and password

3. **Network Access**
   - Add your IP address or `0.0.0.0/0` for all IPs
   - For Vercel deployment, you can use `0.0.0.0/0`

4. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>`, and `<dbname>` with your values

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Environment Variables in Vercel**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add:
     - `MONGO_URL`: Your MongoDB Atlas connection string
     - `NODE_ENV`: `production`

## 📡 API Endpoints

### Officer Management
- `POST /createOfficer/officerRegister` - Create new officer
- `GET /officerapi/getAllOfficers` - Get all officers

### Form Management
- `POST /formapi/createForm` - Create new form
- `GET /formapi/getAllForms` - Get all forms
- `GET /formapi/getForm/:id` - Get form by ID
- `PUT /formapi/updateForm/:id` - Update form
- `DELETE /formapi/deleteForm/:id` - Delete form

### Health Check
- `GET /` - Server health check

## 🔧 Configuration

### CORS Settings
The server is configured to accept requests from:
- `https://fieldinspectionmanagmentsystem.netlify.app` (production)
- `http://localhost:5173` (development)
- `http://localhost:3000` (alternative development)

### Environment Variables
- `MONGO_URL`: MongoDB Atlas connection string
- `PORT`: Server port (default: 8005)
- `NODE_ENV`: Environment (development/production)

## 🛠️ Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check your connection string
   - Verify network access settings in Atlas
   - Ensure database user has correct permissions

2. **CORS Errors**
   - Verify your frontend URL is in the allowed origins
   - Check if you're using the correct protocol (http/https)

3. **Vercel Deployment Issues**
   - Ensure all environment variables are set in Vercel
   - Check the build logs for any errors
   - Verify the `vercel.json` configuration

### Logs
- Check Vercel function logs for deployment issues
- Use `console.log` statements for debugging
- Monitor MongoDB Atlas logs for connection issues

## 📝 Notes

- The server automatically connects to MongoDB on startup
- All API responses follow a consistent format with `success` and `message` fields
- Error handling middleware catches and formats all errors
- File uploads are limited to 200MB per request
