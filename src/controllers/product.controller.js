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
    return res.render("newProduct", { errorMessage: null });
  }
  addNewProduct(req, res) {
    ProductModel.addNew(req.body);
    let products = ProductModel.getProductArray();
    res.render("product", { products });
  }
  getProductView(req, res, next) {
    const id = parseInt(req.params.id, 10); // Ensure ID is treated as a number
    const productFound = ProductModel.getProductbyId(id);

    if (productFound) {
      return res.render("updateProduct", {
        product: productFound,
        errorMessage: null,
      });
    } else {
      return res.status(404).send("Product not found");
    }
  }
  postUpdateProduct(req, res) {
    ProductModel.updateProduct(req.body);
    let products = ProductModel.getProductArray();
    res.render("product", { products });
  }
}
