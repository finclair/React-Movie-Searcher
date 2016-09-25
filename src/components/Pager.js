import React from 'react';

const Pager = (props) => {
  if (props.movies == null) {
    return (
      <h3>No more titles found in this search..</h3>
    );
  }
  if (props.selectedPage <= 1) {
    if (props.movies.length === 10 || props.movies.length === 0) {
      return (
        <div>
          <ul className="pager">
            <li><a href="#" onClick={props.onNextButtonClick}>Next</a></li>
          </ul>
        </div>
      );
    }
    return (
      <div>
        <ul className="pager">
          <li><a href="#" onClick={props.onNextButtonClick}>Next</a></li>
        </ul>
        <h3>No more titles found..</h3>
      </div>
    );
  }
  if (props.movies.length === 10) {
    return (
      <div>
        <ul className="pager">
          <li><a href="#" onClick={props.onPreviousButtonClick}>Previous</a></li>
          <li><a href="#" onClick={props.onNextButtonClick}>Next</a></li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <ul className="pager">
        <li><a href="#" onClick={props.onPreviousButtonClick}>Previous</a></li>
      </ul>
      <h3>No more titles found..</h3>
    </div>
  );
};

Pager.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedPage: React.PropTypes.number,
  onNextButtonClick: React.PropTypes.func,
  onPreviousButtonClick: React.propTypes.func,
};


export default Pager;

