require('dotenv').config()
const express = require('express')
const cors = require('cors')
// const uuid = require('uuid').v4
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const app = express()
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

connectDB()

app.use(express.json())
app.use(cors())
app.use('/api/products', productRoutes)

app.post('/payment', (req, res) => {
    const { cartItems, token } = req.body
    
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    console.log('PRODUCTS: ', cartItems)
    console.log('PRICE: $', getCartSubTotal())
    const idempotencyKey = Math.random()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: getCartSubTotal(),
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchase of ${getCartCount()} items from MustangMods`,
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