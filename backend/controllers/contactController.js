const Contact = require("../models/contactModel");

exports.newContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        console.log(savedContact);
    } catch (err) {
        console.log(err);
    }

}