import express from "express";

const server = express();
server.get("/", (req, res) => {
  res.send("welcome to node js server");
});

server.listen(3300, () => {
  console.log("server is listening on port 3300");
});
