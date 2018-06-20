import React from 'react';
import superagent from 'superagent';

import StarsList from './stars/list.js';
import StarsDetail from './stars/detail.js';
// import {fetchData} from '../lib/utils.js';

const starsAPI = 'http://www.reddit.com/r/astrology.json';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { // app is going to carry the state for everything
      stars: {},
      starsList: [],
      // loading: null,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.loadStarsDetails = this.loadStarsDetails.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  async componentDidMount() {
    const data = await this.loadStarsList();
    this.setState(Object.assign(...this.state, data));
    console.log('__STATE__', this.state);
  }

  async loadStarsList() {
    const starsData = await this.fetchData(starsAPI);
    let starsList = starsData.results;
    return {starsList};
  }

  fetchData(url) {
    return superagent.get(url)
    .then(result => {
      return result.body
    })
    .catch(console.error);
  }

  async loadStarsDetails(event) {
    let element = event.target;
    let url = event.target.value;
    console.log('fetching', url);
    const starsData = await this.fetchData(url);
    let loading = null;
    let stars = starsData;
    this.setState(Object.assign(...this.state, {stars}));
  }

  handleSearch(event) {
    event.preventDefault();
    let search = event.target.value;
  }

  render() {
    return(
      <main>
      <StarsList stars={this.state.starsList} loadStarsDetails={this.loadStarsDetails} handleSearch={this.handleSearch} />
      <StarsDetail stars={this.state.stars} />
      </main>
    );
  }
}