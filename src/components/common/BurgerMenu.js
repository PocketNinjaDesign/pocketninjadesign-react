import React from 'react';

export default (props) => {
  return (
    <div id={props.id} className="burger-menu">
      <div className="burger-bar-1"></div>
      <div className="burger-bar-2"></div>
      <div className="burger-bar-3"></div>
    </div>
  );
}