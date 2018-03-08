import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="page page-home">
        <h1>This is the Home Page</h1>
        <NavLink to="/portfolio/ui-design">Go To Portfolio</NavLink>
      </div>
    );
  }
}

export default Home;