const mongoose = require("mongoose");

const mongoDb = async () => {
  mongoose
    .connect('mongodb+srv://jitesh04sharma:d5wxsXA2AkbZ5H4W@notepadeditor.lbf72yw.mongodb.net/?retryWrites=true&w=majority&appName=NotePadEditor')
    .then(() => {
      console.log("Connect to Database ");
    })
    .catch((error) => {
      console.log("Unable to Connect to database ", error);
    });
};

module.exports = mongoDb;
