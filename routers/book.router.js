const { Router } = require("express");
const {
  createBookHandler,
  getManyBooksHandler,
  updateBookHandler,
  deleteBookHandler,
} = require("../controllers/book.controller");

const router = Router();

/**
 * @openapi
 *  /api/books:
 *    get:
 *      tags:
 *        - Books
 *      summary: Get all the books
 *      responses:
 *        200:
 *          description: Success, return all the books in array
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/BookDto"
 *        500:
 *          description: Internal Server Error
 *
 *    post:
 *      tags:
 *        - Books
 *      summary: Create a new book
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/CreateBookDto"
 *      responses:
 *        201:
 *          description: Created new book
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/BookDto"
 *
 * /api/books/{id}:
 *   patch:
 *     tags:
 *       - Books
 *     summary: update a book by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdateBookDto"
 *     responses:
 *        202:
 *         description: Successfully updated the book
 *         content:
 *           application/json:
 *            schema:
 *             $ref: "#/components/schemas/BookDto"
 *   delete:
 *     tags:
 *      - Books
 *     summary: delete a book by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       202:
 *         description: Successfully deleted the book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BookDto"
 *
 */

router.route("/").get(getManyBooksHandler).post(createBookHandler);
router.route("/:id").patch(updateBookHandler).delete(deleteBookHandler);

module.exports = router;
