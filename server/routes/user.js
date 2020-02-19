const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
const keys = require('../keys')

// const { check, validationResult } = require('express-validator');

// // POST New Account

// router.post('/user ', [
//     check('email').isEmail(),
//     check('password').isLength({ min: 4 })
// ], (req, res => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(422).json({ errors: errors.array() });
//     }

//     user.create({
//         email: req.body.email,
//         password: req.body.password
//     }).then(user => res.json(user));
// })
// );

router.post('/', (req, res) => {

    const { email, password } = req.body;
    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter the fields' })
    }
    // check if the user already exists
    userModel.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists!' })

            const newUser = new userModel({
                email,
                password
            });

            // Create salt & hash

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            // payload with a token that expires in 1 hour
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
                })
            })
        });


});



module.exports = router