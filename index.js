const express = require("express");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

const app = express();
app.use(cors());

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: true }));

// Redirect handler
app.get("/", (req, res) => {
  console.log(req, "======", res);
  const redirectUri =
    "com.hamzaaslam004.myapp://com.hamzaaslam004.myapp/android/callback";
  // Redirect to the custom scheme URI with query parameters
  res.redirect(`${redirectUri}`+req.url);
});

// Read SSL certificate and key
const sslOptions = {
  key: fs.readFileSync("server.key"), // Path to your private key
  cert: fs.readFileSync("server.cert"), // Path to your certificate
};

// Start the HTTPS server
const PORT = process.env.PORT || 4600;
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Middleware server running on https://localhost:${PORT}`);
});
