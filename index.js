const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


// Dummy user
const USER = { email: "test@example.com", password: "123456" };


app.post("/login", (req, res) => {
const { email, password } = req.body;


if (email === USER.email && password === USER.password) {
return res.json({ success: true, message: "Login successful" });
}


res.json({ success: false, message: "Invalid email or password" });
});


app.listen(5000, () => console.log("Backend running on http://localhost:5000"));