import React, { Component, Fragment } from 'react';

export default class StarsList extends Component {

  render() {
    console.log(this.props.stars);
    return(
      <div>
        <h1>My List</h1>
        {
          this.props.stars.map((star, index) => (
            <ul>
              <a 
                target="blank" 
                href={star.data.url} 
                key={index}>
                <li>{star.data.title}</li>
              </a>
            </ul>
          ))
        }
      </div>
    );
  }
}

// <form onSubmit={this.props.handleSearch}>
//   <input placeholder='Stars Name...' />
// </form>
// {
//   this.props.stars.map((stars, index) => {
//     <div key={index}>
//       <input
//         onChange={this.props.loadStarsDetails}
//         type='radio'
//         id={stars.name}
//         name='stars'
//         value={stars.url}
//       />
//       <label htmlFor={stars.name}>
//         {stars.name}
//       </label>
//     </div>;
//   })
// }