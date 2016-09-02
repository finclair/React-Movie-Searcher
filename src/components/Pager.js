import React from 'react';

const Pager = (props) => {


    return (
        <div>
            <ul className="pager">
                
                <li><a href="#" onClick={props.onNextButtonClick}>Next 10 titles</a></li>
            </ul>
        </div>
    );
}

export default Pager;
