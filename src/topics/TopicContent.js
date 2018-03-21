import React from 'react';
import PropTypes from 'prop-types';

const TopicContent = ({ topicUrl, topicData }) => (
  <div>
    {
    topicData.type === 'url' ?
      <a href={topicUrl} target="_blank">
        <div>{topicData.text}</div>
      </a>
    :
      <div>{topicData.text}</div>
  }
  </div>
);

export default TopicContent;

TopicContent.defaultProps = {
  topicUrl: '',
};

TopicContent.propTypes = {
  topicUrl: PropTypes.string,
  topicData: PropTypes.shape({}).isRequired,
};
