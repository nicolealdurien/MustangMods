require('dotenv').config()
const express = require('express')
const cors = require('cors')
let uuid = require('uuidv4')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

connectDB()

app.use(express.json())
app.use(cors())
app.use('/api/products', productRoutes)

app.post('/payment', (req, res) => {
    const { product, token } = req.body
    console.log('PRODUCT', product)
    console.log('PRICE', product.price)
    const idempotencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of product.name`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, {idempotencyKey})
    }).then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})












app.listen(PORT, () => console.log(`Server running on port ${PORT}`))