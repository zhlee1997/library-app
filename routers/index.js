const { Router } = require("express");
const { getInfoHandler } = require("../controllers");
const bookRouter = require("./book.router");
const swaggerUi = require("swagger-ui-express");
const { swaggerSpecification } = require("../config/swagger.config");

const router = Router();

router.use("/books", bookRouter);

router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerSpecification));

module.exports = { router };
