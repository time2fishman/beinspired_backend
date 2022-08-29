import express from "express";
import { getQuotes, createQuote } from "../controllers/quotes.js";

const router = express.Router();

router.get("/", getQuotes)
router.post("/", createQuote);

export default router;
