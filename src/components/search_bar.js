import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
        <div className="well">
            <form id="search">
                <input onChange = {this.onInputChange} />
                <span class="input-group-btn">
                    <button class="btn btn-primary" type="submit">
                        <span class="glyphicon glyphicon-search"></span> Search
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


