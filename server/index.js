const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const membersRoute = require("./routes/membersRoute");
const mongoDb = require("./mongoDb/mongoDb");
const app = express();
const PORT = 3001;

// cookie Pareser
app.use(cookieParser());
// CORS origin
app.use(
  cors({
    origin: "http://localhost:3000",  
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
app.use("/api/members", membersRoute);

app.listen(PORT, () => {
  console.log("Server is running on port 3001");
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
