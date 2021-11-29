'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    published: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    points: DataTypes.INTEGER,
    category: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {as: 'user', foreignKey: 'userId'});
    Post.hasMany(models.Media, {as: 'media', foreignKey: 'postId', onDelete: 'CASCADE'});
    Post.hasMany(models.Comment, {as: 'comment', foreignKey: 'postId', onDelete: 'CASCADE'});
    Post.hasMany(models.PostVote, {as: 'postVote', foreignKey: 'postId', onDelete: 'CASCADE'});
    Post.hasMany(models.PostHeart, {as: 'postHeart', foreignKey: 'postId', onDelete: 'CASCADE'});
  };
  return Post;
};
