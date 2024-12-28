import express from "express";
import ProductController from "./src/controllers/product.controller.js";

const server = express();

const controller = new ProductController();

server.get("/", controller.getProducts);
server.use(express.static("src/view"));

server.listen(3300, () => {
  console.log("server is listening on port 3300");
});
