import React, { Component } from 'react';

const url = 'http://www.omdbapi.com/?s=';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <div className="well">
                <form className="search" onSubmit={this.onFormSubmit} >
                    <input value={this.state.input} onChange={this.onInputChange}/>
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">
                            <span className="glyphicon glyphicon-search" /> Search
                        </button>
                    </span>
                </form>
            </div>
        );
    }

    onInputChange(event) {
        this.setState({input: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearching(`${url}${this.state.input}`);
    }
}
export default SearchBar;


