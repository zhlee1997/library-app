const { Router } = require("express");
const { getInfoHandler } = require("../controllers");
const bookRouter = require("./book.router");

const router = Router();

router.use("/books", bookRouter);

module.exports = { router };
