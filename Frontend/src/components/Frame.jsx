import React from 'react';
import PropTypes from 'prop-types';

export const Frame = ({ className, src }) => {
  return (
    <img className={className} alt="Frame" src={src} />
  );
};

Frame.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Frame
