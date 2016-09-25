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
            <li><button onClick={props.onNextButtonClick}>Next</button></li>
          </ul>
        </div>
      );
    }
    return (
      <div>
        <ul className="pager">
          <li><button onClick={props.onNextButtonClick}>Next</button></li>
        </ul>
        <h3>No more titles found..</h3>
      </div>
    );
  }
  if (props.movies.length === 10) {
    return (
      <div>
        <ul className="pager">
          <li><button onClick={props.onPreviousButtonClick}>Previous</button></li>
          <li><button onClick={props.onNextButtonClick}>Next</button></li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <ul className="pager">
        <li><button onClick={props.onPreviousButtonClick}>Previous</button></li>
      </ul>
      <h3>No more titles found..</h3>
    </div>
  );
};

Pager.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedPage: React.PropTypes.number,
  onNextButtonClick: React.PropTypes.func,
  onPreviousButtonClick: React.PropTypes.func,
};


export default Pager;

