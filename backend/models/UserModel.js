const mongoose = require('mongoose');

const user = new mongoose.Schema({
    phoneNumber: { type: Number, unique: true },
    name: { type: String },
    seenType: { type: String },
    whatsappName: { type: String },
    bio: { type: String },
    profileImage: { type: String },
    status: [
        {
            sourceURL: { type: String },
            text: { type: String }
        }
    ],
    contactList: [
        {
            phoneNumber: { type: Number },
            name: { type: String }
        }
    ],
    messages: [
        {
            receiver: { type: Number },
            date: { type: String },
            time: { type: String },
            msg: { type: String }
        }
    ]
});

const User = mongoose.model('user', user)
module.exports = User
