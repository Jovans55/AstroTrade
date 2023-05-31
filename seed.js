import { db } from "./server/db";

import Product from "./server/db/models/Product";

const prodcutsData = [
  {
    name: "test",
    price: 20.0,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrH76GDBxZiFUKopDcteBazOkq8MIRoZvWQ&usqp=CAU",
    description: "HELLOO IA AM JOVAN SOTSI THIS IS UNCIORN GLUE",
    popular: true,
  },
  {
    name: "test2",
    price: 2033.44,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrH76GDBxZiFUKopDcteBazOkq8MIRoZvWQ&usqp=CAU",
    description: "HELLOO IA AM JOVAN SOTS GA GHHAHAHH THIS IS NOT It fake GLUE",
    popular: false,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const products = await Promise.all(
      prodcutsData.map((prodcut) => {
        return Product.create(prodcut);
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
