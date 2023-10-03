const { Router } = require("express");
const {
  createBookHandler,
  getManyBooksHandler,
  updateBookHandler,
  deleteBookHandler,
} = require("../controllers/book.controller");

const router = Router();

router.route("/").get(getManyBooksHandler).post(createBookHandler);
router.route("/:id").patch(updateBookHandler).delete(deleteBookHandler);

module.exports = router;
