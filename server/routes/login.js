const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
const keys = require('../keys')
const auth = require('../middleware/auth');

router.post('/', (req, res) => {

    const { email, password } = req.body;
    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter the fields' })
    }
    // check if the user already exists
    userModel.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exist!' })

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' });

                    jwt.sign(
                        { id: user.id },
                        keys.jwtSecret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    email: user.email
                                }
                            });
                        }
                    )

                })
        });
});

// Get request to route/login to validate the user 
// (it takes the token and from it gets the user data)

router.get('/user', auth, (req, res) => {
    userModel.findById(req.user.id)
        // because I don't wanna return the password 
        .select('-password')
        .then(user => res.json(user));
});


module.exports = router