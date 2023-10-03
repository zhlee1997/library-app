const { Sequelize, DataTypes, Op } = require("sequelize");
const { bookModel } = require("./book.model");
const { userModel } = require("./user.model");
const { postModel } = require("./post.model");

const db = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "Siv170013!",
  port: "3306",
  database: "libraryApi",
});

const Book = bookModel(db);

userModel(db).hasMany(postModel(db), { foreignKey: "creatorId" });
postModel(db).belongsTo(userModel(db), { foreignKey: "creatorId" });

module.exports = { db, Book };
