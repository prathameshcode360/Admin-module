import express from "express";
import path from "path";
import ejslayout from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";

const server = express();

const controller = new ProductController();
// setting up view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "view"));

// setting up layout
server.use(ejslayout);

// sending html file
server.get("/", controller.getProducts);

// parsing form data
server.use(express.urlencoded({ extended: true }));

server.get("/new", controller.getForm);
server.post("/", controller.addNewProduct);
server.use(express.static("src/view"));

server.listen(3300, () => {
  console.log("server is listening on port 3300");
});
