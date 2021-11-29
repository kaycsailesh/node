const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const User = require('../models').User;
const LocalUser = require('../ne_models').users;

const config = require('../config/config');
const secretKey = config.secretKey;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dailyguff@gmail.com',
        pass: 'Maxsteel@2'
    }
});

module.exports = {

    async initApi(req, res) {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        const token = req.cookies.jwt;
        if (token) {
            return jwt.verify(token, secretKey, (err, decoded) => {
                if (decoded) {
                    return res.status(200).send({
                        id: decoded.id,
                        verified: decoded.verified,
                        username: decoded.username
                    })
                }
                req.body.user = decoded;
            })
        }
        return res.status(200).send();
    },


    async verifyToken(req, res, next) {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(403).send({
                message: 'Forbidden'
            });
        }
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(500).send(err);
            }
            req.body.user = decoded;
            return next();
        });
    },

    async verifyUser(req, res, next) {
        if (req.body.user.verified) {
            return next();
        }
        return res.status(403).send({message: 'Unverified'})
    },

    async verifyOwnership() {

    },

    hashPassword(password) {
        return bcrypt.hash(password, 10).then((hash) => {
            return hash;
        }).catch(err => {
            return res.status(500).send(err);
        });
    },

    comparePassword(password, user) {
        return bcrypt.compare(password, user.password).then((match) => {
            return match;
        }).catch(err => {
            return res.status(400).send(err);
        });
    },

    generateVerification(email) {
        return bcrypt.hash(email, 8).then(hash => {
            this.verificationEmail(hash);
            return hash;
        }).catch(err => {
        })
    },

    verificationEmail(code) {
        const secret = jwt.sign({
            verification: code
        }, config.verificationSecret, {
            expiresIn: 24 * 60 * 60
        });

        const url = 'http://localhost:4200/verifyemail/' + secret;
        const mailOptions = {
            from: 'dailyguff@gmail.com',
            to: 'kaycsailesh@gmail.com',
            subject: 'Sending Email using Node.js',
            html: 'Click <a href="' + url + '" target="_blank">here</a> to verify'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {

            } else {

            }
        });
    },

    async verifyVerificationCode(req, res) {
        const code = req.body.code.toUpperCase();
        const user = req.body.user;
        if (user.verificationToken === code) {
            return User.update({verified: true}, {
                where: {
                    id: user.id
                }
            }).then(async (user) => {
                const userRes = {

                    id: user.id,
                    username: user.username,
                    verified: true
                };
                const token = jwt.sign(userRes, secretKey, { expiresIn: 345600 });
                res.cookie('jwt', token, { maxAge: 432000000 , httpOnly: true });
                return res.status(200).send(userRes);
            })
        }
        return res.status(403).send({
            message: 'Invalid code'
        })
    },

    getToken(user) {
        const expiresIn = 24 * 60 * 60 * 5;
        return jwt.sign({
            id: user.id,
            username: user.username,
            verified: user.verified,
        }, secretKey, {
            expiresIn: expiresIn
        });
    }
};
