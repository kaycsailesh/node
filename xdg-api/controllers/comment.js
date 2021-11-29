const config = require('../config/config');
const Comment = require('../models').Comment;
const User = require('../models').User;

module.exports = {
  list(req, res) {
    const postId = req.params.postid;
    return Comment.findAll({
      where: {postId: postId},
      include: [
        {model: User, as: 'user', attributes: ['username']},
      ]
    }).then(comments => {
      res.status(200).send(comments);
    })
  },

  create(req, res) {
    const postId = req.params.postid;
    return Comment
      .create({
        comment: req.body.comment,
        postId: postId,
        userId: req.body.user.id
      })
      .then((comment) => {
        commentRes = comment.dataValues;
        commentRes.user = {
          username: req.body.user.username
        };
        res.status(200).send(commentRes)
      })
      .catch((err) => {
        res.status(400).send(err)
      });
  }
};
