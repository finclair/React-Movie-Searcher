import React, { Component } from 'react';

const url = 'http://www.omdbapi.com/?s=';
const typePart = '&type=';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {input: '', searchType: 'movie'};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onSearchTypeChange = this.onSearchTypeChange.bind(this)

    }

    render() {
        return (
            <div className="well">
                <form className="search" onSubmit={this.onFormSubmit} >
                    <div className="form-group">
                        <select className="search-type form-control" onChange={this.onSearchTypeChange}>
                            <option value="movie">Movies</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <input
                            className="form-control" value={this.state.input}
                            onChange={this.onInputChange}
                            placeholder="Search for movies..."
                        />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit">
                                <span className="glyphicon glyphicon-search" /> Search
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }

    onInputChange(event) {
        this.setState({input: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearching(`${url}${this.state.input}${typePart}${this.state.searchType}`);
    }

    onSearchTypeChange(event) {
        this.setState({searchType: event.target.value});
    }
}
export default SearchBar;


