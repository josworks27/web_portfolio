import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

function Contact() {
  return (
    <div>
      <h1>
        <Fade bottom cascade>
          Contact
        </Fade>
      </h1>
      <Fade bottom>
        <div>
          <a href={`mailto:${data.contactEmail}`}>{data.contactEmail}</a>
          <ul>
            {data.social.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Fade>

      <div className="footer">
        <div>Made by 조성철(IKU_JO)</div>
      </div>
    </div>
  );
}

export default Contact;
