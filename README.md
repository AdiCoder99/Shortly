# Shortly - URL Shortening Service

A full-stack URL shortening application built with the **MERN stack** (MongoDB, Express, React, Node.js). This project allows users to quickly convert long URLs into short, shareable links with click tracking.

## � Project Status

- ✅ **Backend**: Ready for production
- ✅ **Frontend**: Completed
- 📅 **Last Updated**: December 2025

## �📋 Project Overview

Shortly is a web application that simplifies URL sharing by:
- Converting long URLs into short, memorable 8-character codes
- Tracking clicks on shortened URLs
- Preventing duplicate shortened URLs for the same original link
- Providing a clean, user-friendly interface for URL management

## 🏗️ Project Structure

```
Shortly/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx         # Main App component
│   │   ├── main.jsx        # React entry point
│   │   ├── index.css       # Global styles
│   │   ├── assets/
│   │   │   └── assets.js   # Asset imports and exports
│   │   ├── components/     # Reusable React components
│   │   │   ├── Header.jsx  # App header component
│   │   │   ├── Hero.jsx    # Hero section component
│   │   │   ├── Input.jsx   # URL input form component
│   │   │   └── Card.jsx    # Shortened link card component
│   │   └── Context/        # React Context for state management
│   │       └── AppContext.jsx  # Global app context and state
│   ├── index.html
│   ├── vite.config.js      # Vite configuration
│   ├── package.json        # Frontend dependencies
│   ├── eslint.config.js    # ESLint configuration
│   ├── vercel.json         # Vercel deployment config
│   └── README.md           # Frontend documentation
│
├── server/                 # Express backend
│   ├── server.js           # Express server entry point
│   ├── package.json        # Backend dependencies
│   ├── .env                # Environment variables
│   ├── configs/
│   │   └── db.js           # MongoDB connection
│   ├── models/
│   │   └── link.js         # Link schema
│   ├── controllers/
│   │   └── linkController.js   # Business logic
│   ├── routes/
│   │   └── linkRoutes.js   # API routes
│   ├── vercel.json         # Vercel deployment config
│   └── README.md           # Backend documentation
│
└── .gitignore
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```

4. Start the server (development):
```bash
npm run server
```

The backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on the port specified by Vite (typically `http://localhost:5173`)

## 🔧 Tech Stack

### Frontend
- **React**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **dotenv**: Environment variable management
- **CORS**: Cross-origin request handling
- **nodemon**: Development auto-reload

## 🎨 Frontend Architecture

### Components
- **Header**: Navigation and branding component
- **Hero**: Landing page hero section with introduction
- **Input**: Form component for URL input and submission
- **Card**: Displays shortened URLs with copy-to-clipboard functionality

### State Management
- **AppContext.jsx**: Global React Context for managing application state, including:
  - Shortened links list
  - Loading states
  - Error handling
  - Form data management

### Styling
- **CSS3**: Clean and responsive styling
- **Mobile-first** approach for responsive design
- Global styles in `index.css`

### Build & Development
- **Vite**: Fast build tool and development server
- Hot Module Replacement (HMR) for instant updates
- Optimized production builds

## 📡 API Endpoints

### POST `/link/shorten`
Shorten a URL
- **Request**: `{ "link": "https://example.com/long/url" }`
- **Response**: `{ "success": true, "uRL": "http://localhost:3000/link/abc12345" }`

### GET `/link/:shortCode`
Redirect to original URL and increment click counter
- **Parameters**: `shortCode` - The 8-character short code
- **Response**: Redirects to original URL

For detailed API documentation, see [server/README.md](server/README.md)

## ✨ Features

### Current Features (Backend Ready)
- ✅ URL shortening with 8-character unique codes
- ✅ URL validation (regex pattern matching)
- ✅ Automatic redirect to original URLs
- ✅ Click tracking for analytics
- ✅ Duplicate URL detection (reuses existing short code)
- ✅ CORS-enabled API
- ✅ Error handling

### Frontend (Completed)
- ✅ React UI for URL input
- ✅ Display shortened URLs
- ✅ Copy to clipboard functionality
- ✅ Link management interface

## 📝 Database Schema

### Link Model
```javascript
{
  link: String,           // Original URL (required)
  shortCode: String,      // Unique 8-character code (required)
  clicks: Number,         // Click counter (default: 0)
  time: Date             // Creation timestamp
}
```

## 🔐 Environment Variables

### Server (.env)
```env
PORT=3000                          # Server port
MONGODB_URI=mongodb://...          # MongoDB connection string
BASE_URL=http://localhost:3000     # Base URL for shortened links
```

## 📦 Running Both Client and Server

### Option 1: Separate Terminals
Terminal 1 - Backend:
```bash
cd server
npm run server
```

Terminal 2 - Frontend:
```bash
cd client
npm run dev
```

### Option 2: Concurrent (from root directory)
If you have a concurrent task runner set up, you can start both simultaneously.

## 🛠️ Available Scripts

### Server
- `npm run server` - Start server in development mode with nodemon
- `npm start` - Start server in production mode

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify your `MONGODB_URI` in `.env`
- Ensure MongoDB server is running
- Check network/firewall settings

### CORS Errors
- Ensure `BASE_URL` in `.env` matches your frontend's origin
- Verify CORS middleware is enabled on the server

### Port Already in Use
- Change `PORT` in `.env` to an available port
- Default: 3000 for backend, 5173 for frontend

## 🚧 Future Enhancements

- User authentication and accounts
- Custom short codes
- Link expiration and deletion
- Advanced analytics dashboard
- Rate limiting
- API key management
- QR code generation for shortened URLs
- Link preview feature
- Bulk URL shortening
- URL history and statistics per user

## 📄 License

ISC

## 👤 Author

Created as a MERN Stack project

---

**Note**: Both Backend and Frontend are completed and ready for use. The application is fully functional.
