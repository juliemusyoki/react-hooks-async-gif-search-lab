// GifListContainer.js
import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // Set initial search query
    const initialQuery = 'dolphin';

    // Fetch initial data
    this.fetchGifs(initialQuery);
  }

  fetchGifs = (query) => {
    // Add your Giphy API key here
    const apiKey = '4a74sC7n7BxIyTmLXPEI69auWAI1oYmS';
    // Fetch data from Giphy API
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data.slice(0, 3) });
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });
  };

  handleSearch = (query) => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
