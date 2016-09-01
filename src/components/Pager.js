import React from 'react';

const Pager = (props) => {


    return (
        <div>
            <button
                className="btn btn-default"
                type="button"
                onClick={props.onNextButtonClick}>
                Next 10 Titles
            </button>
        </div>
    );
}

export default Pager;
