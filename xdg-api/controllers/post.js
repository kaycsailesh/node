const fs = require('fs');

const config = require('../config/config');
const appUrl = config.appUrl;

const Post = require('../models').Post;
const Media = require('../models').Media;
const User = require('../models').User;
const PostVote = require('../models').PostVote;
const PostHeart = require('../models').PostHeart;
const Comment = require('../models').Comment;

module.exports = {

    list(req, res) {
        const pageSize = 4;
        const pageN = req.query.page;
        let offset = (pageSize * pageN) - pageSize;
        return Post.findAll({
            limit: pageSize,
            offset: offset,
            distinct: true,
            attributes: [
                'id', 'title', 'updatedAt', 'tags',
                [Post.sequelize.literal('(SELECT COUNT(*) FROM Posts)'), 'postsCount'],
                [Comment.sequelize.literal('(SELECT COUNT(*) FROM Comments WHERE Comments.postId = Post.id)'), 'commentCount'],
                [PostVote.sequelize.literal('(SELECT COUNT(*) FROM PostVotes WHERE PostVotes.postId = Post.id)'), 'voteCount'],
                [User.sequelize.literal('(SELECT username FROM Users WHERE Users.id = Post.userId)'), 'creator']
            ],
            order: [
                ['updatedAt', 'DESC'],
            ],
          include: [
            {model: Media, as: 'media', attributes: ['mediaUrl']},
            {model: PostVote, as: 'postVote', attributes: ['id', 'userId']},
            {model: PostHeart, as: 'postHeart', attributes: ['id', 'userId']},
          ],
        }).then(posts => {
            return res.status(200).send(posts)
        });
    },

    listPopular(req, res) {
      const pageSize = 4;
      const pageN = req.query.page;
      let offset = (pageSize * pageN) - pageSize;
        return Post.findAll({
            limit: pageSize,
            offset: offset,
            distinct: true,
            attributes: [
                'id', 'title', 'updatedAt', 'tags',
                [Post.sequelize.literal('(SELECT COUNT(*) FROM Posts)'), 'postsCount'],
                [Comment.sequelize.literal('(SELECT COUNT(*) FROM Comments WHERE Comments.postId = Post.id)'), 'commentCount'],
                [PostVote.sequelize.literal('(SELECT COUNT(*) FROM PostVotes WHERE PostVotes.postId = Post.id)'), 'voteCount'],
                [User.sequelize.literal('(SELECT username FROM Users WHERE Users.id = Post.userId)'), 'creator']
            ],
            include: [
                {model: Media, as: 'media', attributes: ['mediaUrl']},
                {model: PostVote, as: 'postVote', attributes: ['id', 'userId']},
                {model: PostHeart, as: 'postHeart', attributes: ['id', 'userId']},
            ],
            order: [[PostVote.sequelize.literal('voteCount'), 'DESC']]

        }).then(posts => {
            return res.status(200).send(posts)
        });
    },

    get(req, res) {
        const id = req.params.postid;
        return Post.findByPk(id, {
            attributes: [
                'id', 'title', 'updatedAt', 'tags',
                [Comment.sequelize.literal('(SELECT COUNT(*) FROM Comments WHERE Comments.postId = Post.id)'), 'commentCount'],
                [PostVote.sequelize.literal('(SELECT COUNT(*) FROM PostVotes WHERE PostVotes.postId = Post.id)'), 'voteCount'],
                [User.sequelize.literal('(SELECT username FROM Users WHERE Users.id = Post.userId)'), 'creator']
            ],
            include: [
                {model: Media, as: 'media', attributes: ['mediaUrl']},
                {model: PostVote, as: 'postVote'},
                {model: PostHeart, as: 'postHeart'},
                {
                    model: Comment,
                    as: 'comment',
                    include: [
                        {model: User, as: 'user', attributes: ['username']},
                    ]
                }
            ]
        }).then(post => {
            return res.status(200).send(post);
        });
    },

    create(req, res, next) {
        let tags = '';
        if (req.body.tags) {
            tags = req.body.tags.substr(0,20);
        }
        const postBody = {
            title: req.body.title,
            published: req.body.published || false,
            userId: req.body.user.id,
            url: req.body.url,
            body: req.body.story
        };

        return Post.create(postBody).then(post => {
            if (req.files) {
                req.body.postId = post.id;
                return next();
            }
            req.status(200).send(post);
        });
    },

    update(req, res) {
        const id = req.params.postid;
        const postBody = {
            title: req.body.title,
            tags: req.body.tags,
            published: req.body.published
        };
        return Post.update(postBody, {where: {id: id}}).then(post => {
            console.log(post);
            res.status(200).send(post)
        });
    },

    delete(req, res) {
        const id = req.params.postid;
        return Post.destroy({where: {id: id}}).then(post => {
            console.log(post);
            res.status(200).send({
                message: 'success'
            })
        })
    },

    like(req, res) {
        const userId = req.body.user.id;
        const postId = req.params.postid;

        return PostVote.findOrCreate({
            where: {
                userId: userId,
                postId: postId
            }
        }).then(like => {
            res.status(200).send({
                message: 'success'
            })
        })
    },

    dislike(req, res) {
        const userId = req.body.user.id;
        const postId = req.params.postid;

        return PostVote.destroy({
            where: {
                userId: userId,
                postId: postId
            }
        }).then(like => {
            res.status(200).send({
                message: 'success'
            })
        })
    },

    save(req, res) {
        const userId = req.body.user.id;
        const postId = req.params.postid;

        return PostHeart.findOrCreate({
            where: {
                userId: userId,
                postId: postId
            }
        }).then(like => {
            res.status(200).send({
                message: 'success'
            })
        })
    },

    unsave(req, res) {
        const userId = req.body.user.id;
        const postId = req.params.postid;

        return PostHeart.destroy({
            where: {
                userId: userId,
                postId: postId
            }
        }).then(like => {
            res.status(200).send({
                message: 'success'
            })
        })
    },
};
