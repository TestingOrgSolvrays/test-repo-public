const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy user data for demo
const USER = {
  email: "test@example.com",
  password: "123456"
};

require('dotenv').config();

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.status(200).json({
      success: true,
      message: "Login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);

  const test_url = new URL (process.env.TEST_URL);

  console.log("test_url is:", test_url)
});
