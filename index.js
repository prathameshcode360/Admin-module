import express from "express";
import path from "path";
import ProductController from "./src/controllers/product.controller.js";

const server = express();

const controller = new ProductController();

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "view"));

server.get("/", controller.getProducts);
server.use(express.static("src/view"));

server.listen(3300, () => {
  console.log("server is listening on port 3300");
});
