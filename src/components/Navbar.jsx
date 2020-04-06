import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

class Navbar extends Component {
  state = {};

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav>
        <ul className="Navigation-content">
          <li>
            <Link
              className="link"
              activeClass="active"
              to="homw"
              spy
              smooth
              offset={-70}
              duration={500}
              onClick={this.scrollToTop}
            >
              Top
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="About"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="Work"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="Footer"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
