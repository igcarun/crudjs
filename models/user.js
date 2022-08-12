const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('User', userSchema)