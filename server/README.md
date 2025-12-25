# Shortly - Backend

A URL shortening service backend built with **Node.js**, **Express**, and **MongoDB**.

## Features

- **Shorten URLs**: Convert long URLs into short, shareable links with an 8-character code
- **Redirect**: Automatically redirect short URLs to their original destinations
- **Click Tracking**: Track the number of clicks for each shortened URL
- **Duplicate Detection**: Returns existing short code if the same URL is shortened multiple times
- **URL Validation**: Validates URLs before shortening
- **CORS Enabled**: Supports cross-origin requests for frontend integration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Environment Management**: dotenv
- **CORS**: cors middleware
- **Development**: nodemon

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```

## Running the Server

**Development mode** (with nodemon for auto-reload):
```bash
npm run server
```

**Production mode**:
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 3000).

## API Endpoints

### 1. Shorten URL
- **Endpoint**: `POST /link/shorten`
- **Request Body**:
  ```json
  {
    "link": "https://example.com/very/long/url"
  }
  ```
- **Success Response** (200):
  ```json
  {
    "success": true,
    "uRL": "http://localhost:3000/link/abc12345"
  }
  ```
- **Error Response** (400):
  ```json
  {
    "success": false,
    "message": "Invalid URL"
  }
  ```
- **Features**:
  - Validates URL format
  - Generates an 8-character unique short code
  - Returns existing short code if URL was already shortened

### 2. Redirect to Original URL
- **Endpoint**: `GET /link/:shortCode`
- **Parameters**: 
  - `shortCode`: The 8-character code generated during URL shortening
- **Response**: Redirects to the original URL (HTTP 301)
- **Features**:
  - Increments click counter for the shortened URL
  - Returns error message if short code doesn't exist

## Database Schema

### Link Model
```javascript
{
  link: String,           // Original URL (required)
  shortCode: String,      // Unique 8-character code (required)
  clicks: Number,         // Click counter (default: 0)
  time: Date             // Creation timestamp (default: current date)
}
```

## Project Structure

```
server/
├── .env                  # Environment variables
├── server.js            # Main server file
├── configs/
│   └── db.js           # MongoDB connection configuration
├── models/
│   └── link.js         # Link schema and model
├── controllers/
│   └── linkController.js    # Request handlers for link operations
├── routes/
│   └── linkRoutes.js   # API route definitions
└── package.json        # Project dependencies
```

## Error Handling

- **Invalid URL Format**: Returns 400 status with "Invalid URL" message
- **Database Errors**: Returns error details in the response
- **Non-existent Short Code**: Returns JSON message indicating URL doesn't exist

## Future Enhancements

- User authentication and authorization
- Custom short codes
- Link expiration dates
- Analytics dashboard
- Rate limiting
- API key management
- QR code generation

## License

ISC
