import React from 'react';

export default class StarsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('About to render', this.props.stars);
    return(
      <React.Fragment>
        <form onSubmit={this.props.handleSearch}>
          <input placeholder='Stars Name...'/>
        </form>
        {
          this.props.stars.map((stars, index) => {
            <div key={index}>
              <input 
                onChange={this.props.loadStarsDetails}
                type='radio'
                id={stars.name}
                name='stars'
                value={stars.url}
              />
              <label htmlFor={stars.name}>
                {stars.name}
              </label>
            </div>;
          })
        }
      </React.Fragment>
    );
  }
}