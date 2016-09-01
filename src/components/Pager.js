import React from 'react';

const Pager = (props) => {

    const index = +props.selectedPage + 1;

    return (
        <div>
            <button
                className="btn btn-default"
                type="submit"
                onClick={ () => props.onNextButtonClick(index) } > Next 10 Titles
            </button>
        </div>
    );
}

export default Pager;
