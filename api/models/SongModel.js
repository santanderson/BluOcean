const mongoose = require('mongoose')

const Songs = mongoose.model('Songs', {
    name: String,
    url: String,
    songUserId: String
})

module.exports = Songs