const { DataSource } = require('apollo-datasource');

class LikesAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
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

module.exports = LikesAPI;
