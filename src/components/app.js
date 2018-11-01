import React, { Component, Fragment } from 'react';
import superagent from 'superagent';

import StarsList from './stars/list.js'; 
import Button from './stars/button.js';
// import StarsDetail from './stars/detail.js';
// import {fetchData} from '../lib/utils.js';

const starsAPI = 'http://www.reddit.com/r/astrology.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starsList: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    // this.loadStarsDetails = this.loadStarsDetails.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  // async componentDidMount() {
  //   const data = await this.loadStarsList();
  //   this.setState(Object.assign(...this.state, data));
  //   console.log('__STATE__', this.state);
  // }

  // async loadStarsList() {
  //   const starsData = await this.fetchData(starsAPI);
  //   let starsList = starsData.results;
  //   return {starsList};
  // }

  fetchData() {
    superagent.get('http://www.reddit.com/r/astrology.json')
      .then(response => {
        this.setState({ errorExists: false });
        this.setState({ starsList: response.body.data.children });
      })
      .catch(error => {
        this.setState({ starsList: [] });
        this.setState({ errorExists: true });
      });
  }


  // async loadStarsDetails(event) {
  //   let element = event.target;
  //   let url = event.target.value;
  //   console.log('fetching', url);
  //   const starsData = await this.fetchData(url);
  //   let loading = null;
  //   let stars = starsData;
  //   this.setState(Object.assign(...this.state, {stars}));
  // }

  handleSearch(event) {
    console.log('handling search');
    event.preventDefault();
    this.fetchData();
  }

  render() {
    return(
      <main>
        <Button 
          handleSearch={ this.handleSearch }
        />
        <StarsList 
          stars={ this.state.starsList }
        />
      </main>
    );
  }
}