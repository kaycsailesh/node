'use strict';
module.exports = (sequelize, DataTypes) => {
    const PostVote = sequelize.define('PostVote', {
    }, {});
    PostVote.associate = function(models) {
        PostVote.belongsTo(models.User, {as: 'user'});
        PostVote.belongsTo(models.Post, {as: 'post'});
    };
    return PostVote;
};
