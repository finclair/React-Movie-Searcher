import React from 'react';

const Pager = (props) => {


    return (
        <div>
            <ul className="pager">
                <li><a href='#' onClick={props.onPreviousButtonClick}>Previous</a></li>
                <li><a href="#" onClick={props.onNextButtonClick}>Next</a></li>
            </ul>
        </div>
    );
}

export default Pager;
