const express = require("express");
const Products = require("./db/models/Product");
const app = express();

app.get("/api", async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving products" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
