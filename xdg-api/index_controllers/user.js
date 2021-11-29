const User = require('../models').User;
const users = require('../ne_models').users;
const auth = require('../middleware/auth');
const mailer = require('../middleware/mailer');

module.exports = {

    async register(req, res) {
        const email = req.body.email;
        const username = req.body.username || email;
        let password = req.body.password;

        if (email && password) {
            User.findOne({ where: { email: email } }).then(user => {
                if (user) {
                    return res.status(203).send({
                        message: user.email + 'User exists'
                    })
                }
            });

            const hash = await auth.hashPassword(password);
            const accVerification = Math.floor(Math.random() * 1000000);

            return User.create({
                email: email,
                username: username,
                password: hash,
                verificationToken: accVerification
            }).then(user => {
                req.user = user;
                mailer.verificationEmail(user);
                const token = auth.getToken(user);
                return res.status(200).send({
                    id: user.id,
                    verified: user.verified,
                    username: user.username,
                    token: token
                });
            })
        }

        return res.status(400).send({
            message: 'Invalid form'
        })
    },

    loginView(req, res) {
        console.log('rendering this');
        return res.render('login', { title: 'Login' });
    },

    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        if (email && password) {
            return User.findOne({ where: { email: email } }).then(async user => {
                if (user) {
                    if (await auth.comparePassword(password, user)) {
                        if (user.role === '2') {
                            req.session.user = user;
                            return res.redirect('/dash/post');
                        }
                    }
                }
                return res.render('login', { message: 'User/Password incorrect' });
            });
        }
        return res.render('login', { message: 'Forbidden' });
    },

    list(req, res) {
        return User.findAll().then(user => {
            res.render('users', { title: 'Test', users: user })
        })
    },

    getUser(req, res) {
        const user = req.body.user;
        if (user) {
            res.status(200).send({
                id: user.id,
                username: user.username,
                verified: user.verified,
            })
        }
    },

    banUser(req, res) {
        const id = req.params.userid;
        return User.findByPk(id).then(user => {
            if (user) {
                users.insert({
                    userid: user.id,
                    banned: true,
                    username: user.username,
                    email: user.email
                })
                return User.update(
                    { banned: true }, {
                    where: { id: id }
                }).then(() => {
                    res.send({ message: 'success' })
                })
            }
        })
    },

    sendVerificationEmail(req, res) {
        const user = req.body.user;
        const accVerification = ((Math.random() * 1e32).toString(36).slice(0, 6)).toUpperCase();
        return User.update(
            { verificationToken: accVerification },
            { where: { email: user.email } }
        ).then(async user => {
            mailer.verificationEmail(user);
            res.status(200).send({
                message: 'Email has been sent with verification code'
            });
        });

    }

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
