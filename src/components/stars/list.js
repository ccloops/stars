import React from 'react';

export default class StarsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('About to render', this.props.stars);
    return(
      <div className='starsList'>

        <form action="">
          <input placeholder="Search..."/>
        </form>

        <form action="">
          {
            this.props.stars.map((stars, i) => 
              <div key={i}>
                <input 
                  onChange={this.props.loader}
                  type="radio"
                  id={stars.name}
                  name="stars"
                  value={stars.url}
                />
                <label htmlFor={stars.name}>
                  {stars.name}
                </label>
              </div>
            )
          }
        </form>
      This is the list of stars
      </div>
    );
  }
}