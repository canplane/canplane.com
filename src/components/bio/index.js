import React from 'react';

import authorImage from '/src/assets/author.svg';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

function Bio({ bio, social }) {
  return (
    <div className="bio">
      <img className="logo" alt="logo" src={authorImage} />
      <div className="introduction">
        <p className="title">
          Hello,
          <br />
          My name is
          <br />
          {bio?.name}
          .<br />
        </p>
        <p className="description">
          {bio?.description}
          <br />
        </p>
        <div className="social-links">
          <IconButtonBar
            links={social}
            style={{
              fontSize: '24px',
              color: 'rgb(0, 0, 0)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Bio;
