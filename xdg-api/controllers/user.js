const User = require('../models').User;
const auth = require('../middleware/auth');
const mailer = require('../middleware/mailer');

module.exports = {

    async register(req, res) {
        const email = req.body.email;
        const username = req.body.username;
        let password = req.body.password;

        if (email && password && username) {
            return  User.findOne({where: {email: email}}).then(user => {
                if (user) {
                    return res.status(409).send({
                        message: 'User with email ' + user.email +  ' exists'
                    })
                }
                return User.findOne({where: {username: username}}).then(async username => {
                    if (username) {
                        return res.status(409).send({
                            message: 'Username taken. Try different one'
                        })
                    }
                    const hash = await auth.hashPassword(password);
                    const accVerification = ((Math.random()*1e32).toString(36).slice(0,6)).toUpperCase();

                    return User.create({
                        email: email,
                        username: username,
                        password: hash,
                        verificationToken: accVerification
                    }).then(user => {
                        req.user = user;
                        mailer.verificationEmail(user);
                        const token = auth.getToken(user);
                        res.cookie('jwt', token, { maxAge: 432000000, httpOnly: true });
                        return res.status(200).send({
                            id: user.id,
                            verified: user.verified,
                            username: user.username,
                        });
                    })
                });
            });
        }

        return res.status(400).send({
            message: 'Invalid form'
        })
    },

    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        if (email && password) {
            return User.findOne({where: {email: email}}).then(async user => {
                if (!user) {
                    return res.status(403).send({message: 'User/Password incorrect'});
                }
                if (await auth.comparePassword(password, user)) {
                    token = auth.getToken(user);
                    res.cookie('jwt', token, { maxAge: 432000000, httpOnly: true });
                    return  res.status(200).send({
                        id: user.id,
                        verified: user.verified,
                        username: user.username,
                    });
                } else {
                }
                return res.status(403).send({message: 'User/Password incorrect'});
            });
        }

        return res.status(403).send({
            message: 'Forbidden'
        });
    },

    logout(req, res) {
        res.cookie('jwt', '', { maxAge: 1, httpOnle: true});
        return res.sendStatus(200);
    },

    getUser(req, res, next) {
        const userId = req.body.user.id;
        User.findByPk(userId).then(user => {
            req.body.user = user;
            next()
        })
    },

    sendVerificationEmail(req, res) {
        const user = req.body.user;
        const accVerification = ((Math.random()*1e32).toString(36).slice(0,6)).toUpperCase();
        return User.update(
            {verificationToken: accVerification},
            {where: {email: user.email}}
            ).then(async user => {
            mailer.verificationEmail(user);
            res.status(200).send({
                message: 'Email has been sent with verification code'
            });
        });

    },

    // verifyEmail(req, res) {
    //     const token = req.body.token;
    //     jwt.verify(token, secretKey, (err, decoded) => {
    //         if (err) {
    //             return res.status(500).send(err);
    //         }
    //         User.findOne({where: {email: decoded.email}}).then(user => {
    //             if (user) {
    //                 if(user.verifyToken === decoded.password) {
    //                     req.body.user = user;
    //                     return next();
    //                 }
    //             }
    //             return res.status(403).send({message: 'Forbidden'});
    //         });
    //     });
    // }
};
