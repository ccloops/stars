import React from 'react';
import superagent from 'superagent';

const StarsList = require('./stars/list.js');

const starsAPI = '';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { // app is going to carry the state for everything
      stars: {},
      starsList: [],
    };
    this.loadStarsDetails = this.loadStarsDetails.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  async componentDidMount() {
    const data = await this.loadStarsList();
    this.setState(Object.assign(...this.state, data));
  }

  async loadStarsList() {
    const starsData = await this.fetchData(starsAPI);
    let starsList = starsData.results;
    return {starsList};
  }

  fetchData(url) {
    return superagent.get(url)
    .then(result => {
      return result.body;
    })
    .catch(console.error);
  }

  loadStarsDetails(event) {
    let url = event.target.value;
    console.log('fetching', url);
  }

  render() {
    return(
      <main>
      <StarsList stars={this.state.starsList} starsLoader={this.loadStarsDetails}></StarsList>
      </main>
    );
  }
}