require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useCreateIndex: true
        })
        console.log('Connected to DB!')
    } catch (error) {
        console.error('Failed to connect to DB.')
        process.exit(1)
    }
}

module.exports = connectDB