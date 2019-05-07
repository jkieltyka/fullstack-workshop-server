/* TODO: Implement the missing resolvers for Movie

Remember the resolver function signature:
fieldName: (obj, args, context, info) => result;

You will need to implement resolvers for Movie.cast and Movie.isLiked.
Check the data sources for the data fetching functions you'll need to complete the exercise.
Hint: Only authenticated users can like movies. You will need to access the user from somewhere in your resolver.
*/

module.exports = {
  Movie: {
    score: ({ vote_average }) => vote_average,
    voteCount: ({ vote_count }) => vote_count,
    poster: ({ poster_path }, { size = 500 }) =>
      poster_path && `https://image.tmdb.org/t/p/w${size}${poster_path}`,
    genres: ({ genres }) => (genres ? genres.map(g => g.name) : []),
    releaseDate: ({ release_date }) => release_date,
    cast: () => null,
    isLiked: () => null,
  },
};
