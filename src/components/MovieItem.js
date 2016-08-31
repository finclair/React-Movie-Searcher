import React from 'react';

const MovieListItem = (props) => {
    const movie = props.movie;
    const onMovieClick = props.onMovieClick;

    return (
        <a href="#" className="list-group-item" onClick={() => onMovieClick(movie)}>{movie.Title}
            <span className="badge">{movie.Year}</span>
        </a>
    );
};

export default MovieListItem;