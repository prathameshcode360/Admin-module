import path from "path";
import ProductModel from "../models/product.model.js";
import { url } from "inspector";
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
    return res.render("newProduct", { errorMessage: null });
  }
  addNewProduct(req, res) {
    // validatig data
    const { name, price, image } = req.body;
    let errors = [];

    if (!name || name.trim() === "") {
      errors.push("Name is rquired");
    }
    if (!price || Number(price) < 1) {
      errors.push("Invalid Price");
    }
    try {
      let validImageUrl = new url(image);
    } catch (err) {
      errors.push("url is invalid");
    }
    if (errors.length > 1) {
      return res.render("newProduct", { errorMessage: errors[0] });
    }
    ProductModel.addNew(req.body);
    let products = ProductModel.getProductArray();
    res.render("product", { products });
  }
}
