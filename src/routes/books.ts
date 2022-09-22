import express from "express";
import { getBooks } from "../controllers/books";

const booksRouter = express.Router();

booksRouter.get("", getBooks);

export default booksRouter;