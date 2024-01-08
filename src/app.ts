// TUTO : https://earthly.dev/blog/cicd-build-github-action-dockerhub/

// Import the necessary packages:
import express from "express";

// Define the express instance and the port for the application:
const app = express();
const PORT = process.env.PORT || 4000;

// Define a default testing route:
app.get('/',(req,res) => {
  res.status(200);
  res.send("Hello World!!");
});

// Start the application:
app.listen(PORT, () => {
  console.log("App listening on port" + PORT)
});