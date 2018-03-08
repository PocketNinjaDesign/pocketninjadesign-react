import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Logo from './components/common/Logo';

import Home from './components/page/Home';
import Portfolio from './components/page/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="page page-home">
        <div className="body-block bg-color-1"></div>
        <div className="body-block-2"></div>
        <Logo id="primaryLogo" uniqueClass="primary-logo" />
        <NavLink to="/portfolio/ui-design" className="enter-button">Go To Portfolio</NavLink>

        <div id="contentArea" className="content-area">
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/:type" component={Portfolio} />
        </div>
      </div>
    )
  }
}

export default App;