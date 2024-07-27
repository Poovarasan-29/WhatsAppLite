const User = require("../models/UserModel")

exports.newUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.json({
            userDetails: savedUser
        })
    } catch (err) {
        console.log(err);
    }
}

exports.getContacts = async (req, res, next) => {
    try {
        const userDetails = await User.find({ phoneNumber: req.params.phoneNumber });
        res.json({
            userDetails
        })
    } catch (error) {
        console.log(error);
    }
}


exports.saveMessage = async (req, res) => {
    const updated = await User.updateOne(
        { phoneNumber: req.body.senderNumber },
        {
            $push: {
                messages: {
                    receiver: req.body.receiverNumber,
                    date: req.body.date,
                    time: req.body.time,
                    msg: req.body.text
                }
            }
        }
    )
    const userDetails = await User.find({ phoneNumber: req.body.senderNumber });
    res.status(201).json({
        userDetails
    })


}