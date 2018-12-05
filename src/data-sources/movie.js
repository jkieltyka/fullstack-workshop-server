/* TODO: Fill in the remaining data source methods.

You will need to fill in getMovieById and getCastByMovie.
Use the data source's fetching method (this.get) to query the REST API.

To get a movie, you will want to use the resource `movie/${id}`.

To get a movie's cast, you will want to use the resource `/movie/${id}/credits`.
The response from the cast endpoint has a cast property on the response.
Remember to pay attention to nullability (hint: check the schema)!
*/

const { RESTDataSource } = require('apollo-datasource-rest');

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3';
  }

  // add api params to each request
  // e.g. BASE_URL/movie/1/credits?api_key=4u859034&include_adult=false
  willSendRequest(request) {
    request.params.set('api_key', '4e911a064e43b9cd6fbb3137c572d89a');
    request.params.set('include_adult', false);
  }

  getCastByMovie(id) {}

  getMovieById(id) {}

  async getMovies({ sort, page }) {
    let sortParam = null;
    if (sort === 'POPULARITY') sortParam = 'popularity.desc';
    else if (sort === 'RELEASE_DATE') sortParam = 'release_date.desc';

    const res = await this.get('/discover/movie', {
      params: { page, sort_by: sortParam },
    });

    return res ? res.results : [];
  }
}

module.exports = MoviesAPI;
