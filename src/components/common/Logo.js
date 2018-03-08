import React from 'react';
import LogoSVG from './LogoSVG';

export default (props) => {
  return (
    <div id={props.id} className={`logo ${props.uniqueClass}`}>
      <div className="logo-icon">
        <LogoSVG />
      </div>
      <p className="logo-text">
        <span className="logotext-pocket">Pocket</span>
        <span className="logotext-ninja">ninja</span>
        <span className="logotext-design">.design</span>
      </p>
    </div>
  );
}