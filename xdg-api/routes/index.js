var express = require('express');
var router = express.Router();

const postController = require('../index_controllers').post;
const mediaController = require('../index_controllers').media;
const userController = require('../index_controllers').user;
const authenticate = require('../index_controllers').auth;

router.get('/post', authenticate.verifyUser, postController.list);
router.get('/post/:postid', authenticate.verifyUser, postController.get);
router.post('/post', authenticate.verifyUser, postController.create, mediaController.create);

router.get('/user', authenticate.verifyUser, userController.list);
router.post('/ban/:userid', authenticate.verifyUser, userController.banUser);

router.get('/login', userController.loginView);
router.post('/login', userController.login);

module.exports = router;
