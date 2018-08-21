module.exports = (sequelize, DataTypes) => {
  const Poll = sequelize.define('Poll', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    question: DataTypes.TEXT
  });

  Poll.associate = (models) => {
    models.Poll.belongsToMany(models.User, { as: 'Votes', through: 'VotingList'});
  };

  return Poll;
};
