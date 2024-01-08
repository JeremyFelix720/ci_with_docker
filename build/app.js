"use strict";
// TUTO : https://earthly.dev/blog/cicd-build-github-action-dockerhub/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the necessary packages:
const express_1 = __importDefault(require("express"));
// Define the express instance and the port for the application:
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Define a default testing route:
app.get('/', (req, res) => {
    res.status(200);
    res.send("Hello World!!");
});
// Start the application:
app.listen(PORT, () => {
    console.log("App listening on port" + PORT);
});
