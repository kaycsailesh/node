'use strict';
module.exports = (sequelize, DataTypes) => {
    const PostHeart = sequelize.define('PostHeart', {
    }, {});
    PostHeart.associate = function(models) {
        PostHeart.belongsTo(models.User, {as: 'user'});
        PostHeart.belongsTo(models.Post, {as: 'post'});
    };
    return PostHeart;
};
