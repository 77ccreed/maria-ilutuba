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
        <li>&copy; Maria Ilutuba OÜ</li>
        <li>
          Veebiarendus: <a href="https://tellikoduleht.ee/">OÜ Kodulehe Tellimine</a>
        </li>
        <li>
          Pildid: <a href="https://www.pexels.com/">Pexel</a>
        </li>
      </ul>
    </footer>
  );
}
