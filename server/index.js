const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const userRoute = require("./routes/userRoute");
const membersRoute = require("./routes/membersRoute");
const mongoDb = require("./mongoDb/mongoDb");
const app = express();
const PORT = 4000;

// Socket Implementation
const server = createServer(app);
const io = new Server(server);
// cookie Pareser
app.use(cookieParser());
// CORS origin
app.use(
  cors({
    origin: ["http://localhost:3000"],  
    methods: ["Get", "Post", "Put", "Delete"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// mongodb database
mongoDb();

// Accepting only json data
app.use(express.json());

// Routes
app.use("/api/user", userRoute);

// socket connection
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.use("/api/members", membersRoute);

server.listen(PORT, () => {
  console.log("Server is running on port 4000");
});

// middleware to handle error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
