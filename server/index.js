const express = require('express');
const userRoute = require('./routes/userRoute');
const mongoDb = require('./mongoDb/mongoDb');
const app = express();
const PORT = 3000;

// mongodb database
mongoDb();

// Accepting only json data
app.use(express.json());

// Routes
app.use('/api/user',userRoute);

app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
})

// middleware to handle error
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})