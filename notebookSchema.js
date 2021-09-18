const mongoose = require('mongoose')


const data = new mongoose.Schema({
    note: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('notes',data)