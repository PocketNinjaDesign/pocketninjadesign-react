import React, { Component } from 'react';

import SocialMediaLinks from '../common/SocialMediaLinks';

class Home extends Component {
  render() {
    return (
      <div className="under-contruction">
        <div className="site-width">
          <h1>Digital Designer &amp;</h1>
          <h3>Front End Developer</h3>
          <SocialMediaLinks id="holdingSocialLinks" />
        </div>
      </div>
    );
  }
}

export default Home;