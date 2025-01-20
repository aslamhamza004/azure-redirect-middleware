const express = require("express");
const app = express();

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: true }));

// Redirect handler
app.get("/auth/callback", (req, res) => {
  const redirectUri =
    "com.hamzaaslam004.myapp://com.hamzaaslam004.myapp/android/callback";
  const queryParams = new URLSearchParams(req.query).toString();

  // Redirect to the custom scheme URI with query parameters
  res.redirect(`${redirectUri}`);
});

// Start the server
const PORT = process.env.PORT || 4600;
app.listen(PORT, () => {
  console.log(`Middleware server running on https://localhost:${PORT}`);
});
