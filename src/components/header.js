import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: 'center',
      }}
    >
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <p className="tagline">
        UI Developer, "Father" of Dogs, Downhill Mountain Bike Racer, Pizza
        Lover, CSS and ReactJS Fanatic
      </p>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
