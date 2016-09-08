import React from 'react';

const Pager = (props) => {

    if (props.movies == null) {
        return (
            <h3>No more titles found in this search..</h3>
        );
    }
    else {
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
                else {
                    return (
                        <div>
                            <ul className="pager">
                                <li><a href="#" onClick={props.onNextButtonClick}>Next</a></li>
                            </ul>
                            <h3>No more titles found..</h3>
                        </div>
                    )
                }
            }
            else {
                if (props.movies.length === 10) {
                    return (
                        <div>
                            <ul className="pager">
                                <li><a href='#' onClick={props.onPreviousButtonClick}>Previous</a></li>
                                <li><a href="#" onClick={props.onNextButtonClick}>Next</a></li>
                            </ul>
                        </div>
                    );
                }
                else {
                    return (
                        <div>
                            <ul className="pager">
                                <li><a href='#' onClick={props.onPreviousButtonClick}>Previous</a></li>
                            </ul>
                            <h3>No more titles found..</h3>
                        </div>
                    );
                }
            }
        }
    }

   
export default Pager;
