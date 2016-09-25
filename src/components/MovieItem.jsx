import React from 'react';

const MovieListItem = (props) => {
  const movie = props.movie;
  const onMovieClick = props.onMovieClick;

  let itemClass = 'list-group-item ';
  if (props.movie != null && props.selectedMovie != null) {
    if (props.selectedMovie.imdbID === props.movie.imdbID) {
      itemClass += 'active';
    }
  }

  return (
    <button className={itemClass} onClick={() => onMovieClick(movie)}>{movie.Title}
      <span className="badge">{movie.Year}</span>
    </button>
  );
};

MovieListItem.propTypes = {
  movie: React.PropTypes.object,
  onMovieClick: React.PropTypes.func,
  selectedMovie: React.PropTypes.object,
};

export default MovieListItem;
