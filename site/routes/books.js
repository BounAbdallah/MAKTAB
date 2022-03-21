const express = require("express")

const epress = require("express")
const router = express.Router()

const book = require("../controllers/book")

router.get("/", book.getAllBooks)

module.exports = router