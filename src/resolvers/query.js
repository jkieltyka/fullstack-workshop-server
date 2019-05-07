/* TODO: Implement the resolvers for Query

Remember the resolver function signature:
fieldName: (obj, args, context, info) => result;

You will need to implement resolvers for Query.movie and Query.likes.
Check the data sources for the data fetching functions you'll need to complete the exercise.
Hint: Only authenticated users can like movies. You will need to access the user from somewhere in your resolver.
*/

module.exports = {
  Query: {
    movie: () => null,
    movies: (root, { sort, page = 1 }, { dataSources }) => {
      // API restriction
      if (page > 1000)
        throw new Error('Page must be less than or equal to 1000');
      return dataSources.moviesAPI.getMovies({ sort, page });
    },
    likes: () => null,
  },
};
