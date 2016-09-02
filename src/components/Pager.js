import React from 'react';

const Pager = (props) => {

    if(props.selectedPage <= 1) {
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
                    <li><a href='#' onClick={props.onPreviousButtonClick}>Previous</a></li>
                    <li><a href="#" onClick={props.onNextButtonClick}>Next</a></li>
                </ul>
            </div>
        );
    }   
}

export default Pager;
