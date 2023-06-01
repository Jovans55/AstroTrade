const router = require("express").Router();
const Products = require("../db/models/Product");

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.findAll();
    console.log("HELLO", products);
    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
  const error = new Error("API route not found!");
  error.status = 404;
  next(error);
});

module.exports = router;
