import React from 'react';

const MovieList = (props) => {
    console.log(props);

    if (!props.movies.length) {
        return null;
    }

    return (
      <ul className="col-md-4 list-group">


          {props.movies[0].Title}
      </ul>
    );
};

export default MovieList;