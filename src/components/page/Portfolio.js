import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Gallery from '../gallery/Gallery';
import GalleryDetail from '../gallery/GalleryDetail';
import SideNav from '../common/SideNav';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.match.params.type
    }
  }

  componentWillReceiveProps() {
    this.setState((prevState, props) => {
      return { type: props.match.params.type };
    });
  }

  render() {
    return (
      <div>
        <h3><NavLink to="/">Home</NavLink></h3>
        <h1>Portfolio Page</h1>
        <p>{ this.state.type }</p>
        <SideNav />
        <GalleryDetail />
        <Gallery />
      </div>
    );
  }
}

export default Portfolio;