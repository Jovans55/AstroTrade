const { db } = require("./server/db");

const Product = require("./server/db/models/Product");

const productsData = require("./productsData");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const products = await Promise.all(
      productsData.map((product) => {
        return Product.create(product);
      })
    );
  } catch (error) {
    console.log(error);
  }
};

async function runSeed() {
  try {
    await seed();
    console.log("Seeding success!");
  } catch (err) {
    console.error("You messed it up");
    console.error(err);
  } finally {
    db.close();
  }
}

runSeed();
