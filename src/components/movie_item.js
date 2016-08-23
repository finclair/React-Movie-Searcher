import React from 'react';

const MovieListItem = (props) => {
    const movie = props.movie;
    const movieID = movie.imdbID;
    
    //console.log('moii',movie);

    return <a href="#" className="list-group-item" >{movie.Title}<span className="badge">{movie.Year}</span></a>;
};

export default MovieListItem;