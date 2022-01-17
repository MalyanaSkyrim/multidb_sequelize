require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const express = require("express");
const cors = require("cors");
const db = require("./models");
const { getDatabasesUrls } = require("./helpers/dbHelper");
const app = express();
const {User,Product} = require("./models").testdb_1

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Promise.all(
  getDatabasesUrls().map(async (dbUrl) => {
    const splitDbUrl = dbUrl.split("/");
    const dbName = splitDbUrl[splitDbUrl.length - 1];
    return db[dbName].sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync " + dbName);
    });
  })
).then(async () => {
  console.log("All databases are re-synced ");
  //Test
  const user = await User.create({firstname:'Mm',lastname:"Ml"});
  const prod = await Product.create({name:'prod1',price:8.65});
  await user.addProduct(prod);
  await user.reload();
  console.log({user:user.dataValues});
});

if (process.env.NODE_ENV === "development") {
  app.listen(process.env.PORT, () =>
    console.log(`Listening on: ${process.env.PORT}`)
  );
}
