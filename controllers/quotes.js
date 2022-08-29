import QuoteMessage from "../models/quoteMessage.js";

export const getQuotes = async (req, res) => {
  try {
    const quoteMessages = await QuoteMessage.find();
    res.status(200).json(quoteMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createQuote = async (req, res) => {
  const quote = req.body;
  const newQuote = new QuoteMessage(quote);

  try {
    await newQuote.save();
    res.status(201).json(newQuote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
