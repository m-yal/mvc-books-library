"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("./routes/books"));
const book_1 = __importDefault(require("./routes/book"));
const auth_1 = __importDefault(require("./routes/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = require("./models/connection");
exports.app = (0, express_1.default)();
dotenv_1.default.config();
(0, connection_1.getQuery)();
exports.app.use("/", books_1.default);
exports.app.use("/books", book_1.default);
exports.app.use("/auth", auth_1.default);
exports.app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});
const PORT = process.env.PORT || "3005";
exports.app.listen(PORT);
console.log("Server started on port " + PORT);
