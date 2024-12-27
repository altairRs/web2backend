const http = require("http");
const express = require("express");
const os = require("os");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());


// Serve static files with fallback to '.html' or '.htm'
app.use(express.static(path.join(__dirname, "public"), {
    extensions: ['html', 'htm'], // Automatically serve files without extension
}));

// API routes
app.use("/users", userRoutes);

// Root route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\public\\login.html");
});


// Server listener
app.listen(PORT, () => {
    const userName = os.userInfo().username;
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Current user: ${userName}`);
});

//C:\Users\ramze\OneDrive\Desktop\Backend\server.js