import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import App from './components/app.js';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <App/>
      </Fragment>
    );
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));