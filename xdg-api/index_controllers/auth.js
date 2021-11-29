const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const User = require('../models').User;
const userController = require('../controllers').user;
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
    async verifyUser(req, res, next) {
        if (req.session.user) {
            if (req.session.user.role === '2') {
                return next();
            }
            return res.redirect('/dash/login');
        }
        return res.redirect('/dash/login');
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
};
