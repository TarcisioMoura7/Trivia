import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { getUrl, getName, score } = this.props;
    return (
      <header>
        <img
          style={ { width: '90px', borderRadius: '50px' } }
          data-testid="header-profile-picture"
          src={ getUrl }
          alt="Profile"
        />
        <h4 data-testid="header-player-name">{getName}</h4>
        <h5 data-testid="header-score">{score}</h5>
      </header>
    );
  }
}

Header.propTypes = {
  getUrl: PropTypes.string.isRequired,
  getName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Header;
