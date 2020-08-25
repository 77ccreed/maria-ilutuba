import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1 className="tiitel">{config.heading}</h1>
        <p className="tiitel">{config.subHeading}</p>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Vaata lähemalt
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
