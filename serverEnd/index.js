//External Imports
const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");
const env = require("dotenv");
const http = require("http");

//Internal Imports

//Configure app and dotenv
const app = express();
env.config();

//Rest APIs
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from chat application backend/server end");
});

//Socket Configuration
const server = http.createServer(app);
const io = socketIO(server);

//Socket Connection
io.on("connection", function (socket) {
  console.log("Socket Connected.");
});
//Port
const port = process.env.PORT || 8008;

//Server Listen
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${8008}`);
});
