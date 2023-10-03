const { Sequelize, DataTypes, Op } = require("sequelize");
const { bookModel } = require("./book.model");

const db = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "Siv170013!",
  port: "3306",
  database: "libraryApi",
});

const Book = bookModel(db);

module.exports = { db, Book };
