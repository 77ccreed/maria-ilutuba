import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon alt ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Maria Arak FIE (reg. kood 16073337)</li>
        <li>
          Ääre tn 10, 67217, Puka alevik, Otepää vald, Valga maakond
        </li>
        <li>
          Tel: 55638016
        </li>
      </ul>
    </footer>
  );
}
