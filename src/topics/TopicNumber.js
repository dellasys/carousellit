import React from 'react';
import PropTypes from 'prop-types';

const TopicNumber = ({ index }) => (
  <span>{index + 1}</span>
);

export default TopicNumber;

TopicNumber.propTypes = {
  index: PropTypes.number.isRequired,
};
