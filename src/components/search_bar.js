import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
        <div className="well">
            <form className="search">
                <input onChange = {this.onInputChange} />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">
                        <span className="glyphicon glyphicon-search"></span> Search
                    </button>
                </span>
            </form>

        </div>
        );
    }

    onInputChange(event) {
        
    }
}
export default SearchBar;


