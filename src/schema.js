/*
TODO: Write your schema using Schema Definition Language

Write a Movie type that corresponds to the <Movie /> React component.
Check the slide deck for hints!

const Movies = ({ movies }) => {
  return movies.map(movie => (
    <Movie
      key={movie.id}
      id={movie.id}
      title={movie.title}
      overview={movie.overview}
      score={movie.score}
      voteCount={movie.voteCount}
      popularity={movie.popularity}
      poster={movie.poster}
      genres={movie.genres}
      releaseDate={movie.releaseData}
      cast={movie.cast}
      isLiked={movie.isLiked}
      runtime={movie.runtime}
    />
  ));
}
*/

module.exports = `
  type Query {
    movies(sort: SORT_TYPE, page: Int): [Movie]!
  }

  type Mutation {
    login(email: String!): String
  }

  enum SORT_TYPE {
    POPULARITY
    RELEASE_DATE
  }

  type Movie {
    blah: String
  }

  type Cast {
    blah: String
  }
`;
