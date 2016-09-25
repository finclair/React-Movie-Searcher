import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { input: '', searchType: 'movie', isChecked: false };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
  }

  onSearchTypeChange(event) {
    this.setState({ searchType: event.target.value });
  }
  onCheckBoxChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  onInputChange(event) {
    this.setState({ input: event.target.value });

    if (this.state.isChecked && event.target.value.length > 2) {
      this.props.onAutomatedSearching(this.state, event.target.value);
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSearching(this.state);
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
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onCheckBoxChange}
          />Use smart search
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onAutomatedSearching: React.propTypes.func,
  onSearching: React.propTypes.func,
};

export default SearchBar;
