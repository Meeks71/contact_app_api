const express = require('express')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const UserModel = require('../models/contactsSchema')

const router = express.Router()


//* User Login
router.post('/',[
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Check your password!").notEmpty()
] , async (req, res) => {
    const contactData = req.body

    const errors = validationResult(req)
    // Checks for validation errors
    if (!errors.isEmpty()){
        return res.json(errors.array())
    }

    try {
        // Find the user with the provided email
        const contact = await ContactModel.findOne({email: contactData.email})

        if (!contact){
            return res.json('Contact not found!')
        }

        // Compare the plain text password to hashed password
        const isMatch = await bcrypt.compare(userData.password, user.password)

        if (!isMatch){
            return res.json('Password is not a match!')
        }

        res.status(200).json('Success!')

    } catch (error) {
        console.log(error);
        res.status(500).json('Server Error')
    }


})


module.exports = router