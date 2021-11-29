'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    mediaUrl: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {});
  Media.associate = function(models) {
    Media.belongsTo(models.User, {foreignKey: 'userId'});
    Media.belongsTo(models.Post, {foreignKey: 'postId', onDelete: 'CASCADE'});
  };
  return Media;
};
