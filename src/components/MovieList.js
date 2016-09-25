import React from 'react';
import MovieListItem from './MovieItem';

const MovieList = (props) => {
  if (!props.movies || !props.movies.length) {
    return null;
  }

  const movieItems = props.movies.map(movie => (
    <MovieListItem
      onMovieClick={props.onMovieClick}
      key={movie.imdbID}
      movie={movie}
      selectedMovie={props.selectedMovie}
    />
  ));

  return (
    <div className="list-group">
      {movieItems}
    </div>
  );
};

MovieList.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedMovie: React.PropTypes.object,
};


export default MovieList;