import React from 'react';
import PropTypes from 'prop-types';

const TopicTypeLabel = ({ topicData }) => (
  <div className={`label label-${topicData.type === 'text' ? 'primary' : 'danger'}`}>
    {topicData.type.toUpperCase()}
  </div>
);

export default TopicTypeLabel;

TopicTypeLabel.propTypes = {
  topicData: PropTypes.shape({}).isRequired,
};
