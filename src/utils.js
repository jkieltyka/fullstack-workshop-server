const Sequelize = require('sequelize');

module.exports.createStore = () => {
  const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    logging: false,
    // storage: './.store.sqlite',
    operatorsAliases: false,
  });

  const CREATE_LIKES_QUERY = `CREATE TABLE likes(
    id INTEGER PRIMARY KEY,
    createdAt DATETIME,
    updatedAt DATETIME,
    user TEXT,
    movie TEXT
  )`;

  sequelize.query(CREATE_LIKES_QUERY);

  const likes = sequelize.define('like', {
    user: Sequelize.STRING,
    movie: Sequelize.STRING,
  });

  // likes.sync({ alter: true, force: true });

  return { likes };
};
