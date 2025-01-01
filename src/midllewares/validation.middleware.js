import { body, validationResult } from "express-validator";

export default async function validatereq(req, res, next) {
  // 1. Setup rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price should be a positive number"),
    body("image").isURL().withMessage("Invalid URL"),
  ];
  // 2. Run those rules
  await Promise.all(rules.map((rule) => rule.run(req)));
  // 3. Check for validation errors
  let validationRes = validationResult(req);
  if (!validationRes.isEmpty()) {
    return res.render("newProduct", {
      errorMessage: validationRes.array()[0].msg,
    });
  }
  next();
}
