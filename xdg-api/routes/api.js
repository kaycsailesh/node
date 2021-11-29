const express = require('express');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const router = express.Router();


const commentController = require('../controllers').comment;
const postController = require('../controllers').post;
const mediaController = require('../controllers').media;
const userController = require('../controllers').user;
const authenticate = require('../middleware').authenticate;

router.post('/register', csrfProtection, userController.register);
router.post('/login', csrfProtection, userController.login);
router.post('/logout', userController.logout);
router.get('/user', authenticate.verifyToken, userController.getUser);
router.get('/user/sendVerificationEmail', authenticate.verifyToken, userController.sendVerificationEmail);
router.post('/verifyemail', csrfProtection, authenticate.verifyToken, userController.getUser, authenticate.verifyVerificationCode);

router.get('/post', postController.list);
router.get('/post/popular', postController.listPopular);
router.get('/post/:postid', postController.get);
router.post('/post', csrfProtection, authenticate.verifyToken, authenticate.verifyUser, postController.create, mediaController.create);
router.post('/post/:postid', csrfProtection, authenticate.verifyToken, authenticate.verifyUser, postController.update);
router.delete('/post/:postid', authenticate.verifyToken, authenticate.verifyUser, postController.delete);

router.post('/like/post/:postid', csrfProtection, authenticate.verifyToken, authenticate.verifyUser, postController.like);
router.post('/dislike/post/:postid', csrfProtection, authenticate.verifyToken, authenticate.verifyUser, postController.dislike);

router.post('/save/post/:postid', csrfProtection, authenticate.verifyToken, authenticate.verifyUser, postController.save);
router.post('/unsave/post/:postid', csrfProtection, authenticate.verifyToken, authenticate.verifyUser, postController.unsave);

router.get('/post/:postid/comment', commentController.list);
router.post('/post/:postid/comment', csrfProtection, authenticate.verifyToken, authenticate.verifyUser, commentController.create);

router.get('/', csrfProtection, authenticate.initApi);

module.exports = router;
