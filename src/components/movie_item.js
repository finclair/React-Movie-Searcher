import React from 'react';

const MovieListItem = (props) => {
    const movie = props.movie;
    const onMovieClick = props.onMovieClick;
    const url = 'http://www.omdbapi.com/?plot=full&i=';

    const completeUrl = `${url}${movie.imdbID}`

    //console.log(completeUrl);
    //console.log('moii',movie);

    return (
    <a href="#" className="list-group-item" onClick={() => onMovieClick(completeUrl)}>{movie.Title}
        <span className="badge">{movie.Year}</span>
    </a>
    );
};

export default MovieListItem;