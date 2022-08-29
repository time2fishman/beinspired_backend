import mongoose from 'mongoose'

const quoteSchema = mongoose.Schema({
    q: String,
    a: String,
    c: String,
    h: String,
})

const QuoteMessage = mongoose.model('QuoteMessage', quoteSchema)

export default QuoteMessage