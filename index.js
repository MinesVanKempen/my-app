//Import library
const express = require("express");

const PORT = process.env.PORT || 80;
// Create application
const app = express();

//Some basic route
app.get("/", (req, res) => {
  //send response
  res.json({ message: "coucou" });
});
//start serveur
app.listen(PORT, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info("Serveur started.");
});
