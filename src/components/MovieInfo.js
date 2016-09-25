import React from 'react';

const MovieInfo = (props) => {
  if (!props.movie) {
    return null;
  }

  const movie = props.movie;
  let labelColor = 'imdb-rate-of-movie label ';
  if (movie.imdbRating >= 7.0) {
    labelColor += 'label-success';
  }
  if (movie.imdbRating < 7.0 && movie.imdbRating > 5.5) {
    labelColor += 'label-warning';
  }
  if (movie.imdbRating <= 5.5) {
    labelColor += 'label-danger';
  }

  return (
    <div className="col-md-5">
      <div className="movie-info">
        <article>
          <h2 className="title-of-movie">{movie.Title}</h2>
          <h4 className="year-of-movie">{movie.Year}</h4>
          <p className="rate-of-movie">{movie.Rated}</p>
          <p className="director-of-movie">{movie.Director}</p>
          <p className="actors-of-movie">{movie.Actors}</p>
          <p>IMDb Rank: <span className={labelColor}>{movie.imdbRating}</span></p>
          <p className="votes-of-movie">Votes in IMDb: {movie.imdbVotes}</p>
          <p className="oscars-of-movie">{movie.Awards}</p>
          <p className="plot-of-movie">{movie.Plot}</p>
        </article>
      </div>
      <img className="movie-image" src={movie.Poster} alt="Movie Poster" />
    </div>
  );
};

MovieInfo.propTypes = {
  movie: React.PropTypes.object,
};

export default MovieInfo;
