import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/page/Home';
import Portfolio from './components/page/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/portfolio/:type" component={Portfolio} />
      </div>
    )
  }
}

export default App;