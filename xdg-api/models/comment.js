'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {as: 'user', foreignKey: 'userId'});
    Comment.belongsTo(models.Post, {as: 'post', foreignKey: 'postId', onDelete: 'CASCADE'});
  };
  return Comment;
};
