import React from 'react';
import Zoom from 'react-reveal/Zoom';
import data from '../../data';

function Contact() {
  return (
    <div className="Contact-wrap">
      <h1>Contact</h1>
      <Zoom>
        <div className="Contact-content">
          <a
            className="Contact-mail"
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${data.contactEmail}`}
          >
            {data.contactEmail}
          </a>
          <ul>
            {data.social.map((link, index) => (
              <li key={index}>
                <a
                  className="Contact-social"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Zoom>

      <div className="footer">
        <span role="img" aria-label="Rainbow">
          🌈
        </span>
        Made by Jo Seong-cheol
      </div>
    </div>
  );
}

export default Contact;
