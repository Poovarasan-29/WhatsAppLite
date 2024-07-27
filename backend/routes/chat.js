const express = require('express');
const { newContact } = require('../controllers/contactController');
const { newUser, getContacts, saveMessage } = require('../controllers/userController');
const router = express.Router();

router.route('/newUser').post(newUser)
router.route('/contacts/:phoneNumber').get(getContacts)
router.route('/savemessage').post(saveMessage)


module.exports = router