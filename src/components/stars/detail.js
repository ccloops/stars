import React from 'react';

export default class StarsDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='starsDetail'>
        <h2>{this.props.stars.name}</h2>
      </div>
    );
  }
}

