import path from "path";
import ProductModel from "../models/product.model.js";
export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getProductArray();
    // console.log(products);
    res.render("product", { products: products });
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "view", "product.html")
    // );
  }
  getForm(req, res) {
    return res.render("newProduct");
  }
  addNewProduct(req, res) {
    ProductModel.addNew(req.body);
    let products = ProductModel.getProductArray();
    res.render("product", { products });
  }
}
