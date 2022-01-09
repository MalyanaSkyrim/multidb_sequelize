require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const express = require("express");
const cors = require("cors");
const db = require("./models");
const { getDatabasesUrls } = require("./helpers/dbHelper");
const { testDatabases } = require("./testDatabases");
const app = express();

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
).then(() => {
  console.log("All databases are re-synced ");
  testDatabases();
});

if (process.env.NODE_ENV === "development") {
  app.listen(process.env.PORT, () =>
    console.log(`Listening on: ${process.env.PORT}`)
  );
}
