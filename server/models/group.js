module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    question: DataTypes.TEXT
  });

  Group.associate = function(models) {
    models.Group.hasMany(models.User, { as: 'Member', through: 'GroupList'});
  };

  return Group;
};
