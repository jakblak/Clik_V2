const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: Sequelize.STRING
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'disabled'],
      defaultValue: 'user'
    },
    avatar: DataTypes.STRING
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  User.associate = function(models) {
    models.User.belongsToMany(models.Poll, { as: 'Voter', through: 'VotingList'});
    models.User.belongsToMany(models.Group, { as: 'Member', through: 'GroupList'});
  };

  return User;
};
