// GifSearch.js
import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange}
          placeholder="Search for GIFs"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;
