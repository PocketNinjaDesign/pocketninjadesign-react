import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import BurgerMenu from './BurgerMenu';
import SocialMediaLinks from './SocialMediaLinks';

class SideNav extends Component {
  render() {
    return (
      <aside id="sideNavigation" className="side-navigation">
        <BurgerMenu id="sideNavBurgerButton" />
        <div id="sideNavigationMenu" className="side-navigation-menu">
          <ul className="side-links">
            <li>
              <NavLink to="/portfolio/ui-design"
                className="side-link ui-design"
                activeClassName="active">Ui Design</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/graphics"
                className="side-link graphics"
                activeClassName="active">Graphics</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/illustration"
                className="side-link illustration"
                activeClassName="active">Illustration</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media-container">
          <SocialMediaLinks id="sideSocialLinks" />
        </div>
      </aside>
    );
  }
}

export default SideNav;