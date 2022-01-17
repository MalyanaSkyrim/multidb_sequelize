"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const { getDatabasesUrls } = require("../helpers/dbHelper");
const basename = path.basename(__filename);
const db = {};

getDatabasesUrls().forEach(dbUrl => {
  const sequelize = new Sequelize(dbUrl, {
    logging: false
  });

  const splitDbUrl = dbUrl.split("/");
  const dbName = splitDbUrl[splitDbUrl.length - 1];

  db[dbName] = {};
  db[dbName].sequelize = sequelize;

  try{
    fs.readdirSync(`${__dirname}/${dbName}`)
    .filter(file => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach(file => {
      const model = require(path.join(`${__dirname}/${dbName}`, file))(
        sequelize,
        Sequelize.DataTypes
      );
      db[dbName][model.name] = model;
    });
  }catch(err){
    console.log(err)
  }
});

Object.keys(db).forEach(dbName => {
  Object.keys(db[dbName]).forEach(modelName => {
    try{
      if (db[dbName][modelName].associate) {
        db[dbName][modelName].associate(db);
      }
    }catch(err){

    }
  })
})


db.Sequelize = Sequelize;

module.exports = db;
