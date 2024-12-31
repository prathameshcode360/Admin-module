export default function validatereq(req, res, next) {
  // validatig data
  const { name, price } = req.body;
  let errors = [];

  if (!name || name.trim() === "") {
    errors.push("Name is rquired");
  }
  if (!price || Number(price) < 1) {
    errors.push("Invalid Price");
  }
  if (errors.length > 0) {
    return res.render("newProduct", { errorMessage: errors[0] });
  }
  next();
}
