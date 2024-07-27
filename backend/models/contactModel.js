const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    }
})

const Contact = mongoose.model('contact', contact)
module.exports = Contact;