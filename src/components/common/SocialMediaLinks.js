import React from 'react';

import IconCodePen from './icons/IconCodePen';
import IconGithub from './icons/IconGithub';
import IconLinkedIn from './icons/IconLinkedIn';
import IconTwitter from './icons/IconTwitter';

export default (props) => {
  return (
    <ul id={props.id} className="social-media-links">
      <li>
        <a href="https://codepen.io/PocketNinjaDesign/"
          title="Codepen for Pocketninja.design showcasing my sporadic code sketches"
          target="_blank" className="social-media-link">
          <IconCodePen />
        </a>
      </li>
      <li>
        <a href="https://github.com/PocketNinjaDesign/pocketninjadesign"
          title="Github for Pocketninja.design with many repos including one for this site"
          target="_blank" className="social-media-link">
          <IconGithub />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/duncan-gossage-51324615/"
          title="Please feel free to peruse my LinkedIn Profile"
          target="_blank" className="social-media-link">
          <IconLinkedIn />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/PocketNinjaDsgn"
          title="Pocketninja.design twitter account for positing anything interesting, when I remember to."
          target="_blank" className="social-media-link">
          <IconTwitter />
        </a>
      </li>
    </ul>
  );
}