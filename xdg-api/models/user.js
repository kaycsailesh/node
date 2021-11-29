'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    trused: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    banned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    role: DataTypes.STRING,
    avatar: DataTypes.STRING,
    verificationToken: DataTypes.STRING,
    resetPasswordToken: DataTypes.STRING,
    resetPasswordExpires: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post, {as: 'Post', foreignKey: 'userId'});
    User.hasMany(models.Comment, {as: 'Comment', foreignKey: 'userId'});
    User.hasMany(models.PostVote, {foreignKey: 'userId'});
    User.hasMany(models.PostHeart, {foreignKey: 'userId'});
  };
  return User;
};
