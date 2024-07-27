const mongoose = require('mongoose');
const password = encodeURIComponent('@SayHi_29')

const connectDatabase = async () => {

    await mongoose.connect(process.env.MONGODB_URL_FIRST + password + process.env.MONGODB_URL_LAST)
        .then(con => {
            console.log("MogoDB connected", con.connection.host);
        }).catch(err => {
            console.log("Yes Error occured", err);
        })
}

module.exports = connectDatabase