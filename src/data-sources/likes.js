const { DataSource } = require('apollo-datasource');
const Sequelize = require('sequelize');

class LikesAPI extends DataSource {
  constructor() {
    super();
    this.store = createStore();
  }

  async getMovieLikes({ user }) {
    return await this.store.likes.findAll({ where: { user } });
  }

  async toggleMovieLike({ id, user }) {
    const like = await this.store.likes.find({
      where: {
        user,
        movie: id,
      },
    });
    if (!like) await this.store.likes.create({ user, movie: id });
    else await this.store.likes.destroy({ where: { user, movie: id } });
  }

  async isMovieLiked({ id, user }) {
    const like = await this.store.likes.find({ where: { user, movie: id } });
    return !!like;
  }
}

const createStore = () => {
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
  
  likes.sync({ alter: true, force: true });

  return { likes };
};

module.exports = LikesAPI;
