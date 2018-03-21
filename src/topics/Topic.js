import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Votes from './Votes';

const topicNumStyle = {
  float: 'right',
};

const Topic = ({ index, topicData }) => {
  /* Append http:// if invalid URL */
  const topicUrl = (!topicData.url.match(/^[a-zA-Z]+:\/\//) ? `http://${topicData.url}` : topicData.url);


  return (
    <TopicBox className="container-fluid">
      <div className="row">
        <div className="col-xs-2">
          <div className={`label label-${topicData.type === 'text' ? 'primary' : 'danger'}`}>
            {topicData.type.toUpperCase()}
          </div>
          <div>
            <Votes index={index} voteNum={topicData.vote} />
          </div>
        </div>
        <div className="col-xs-10" style={{ display: 'inline-block' }}>
          <span style={topicNumStyle}>{index + 1}</span>
        &nbsp;
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
        </div>
      </div>
    </TopicBox>);
};

export default Topic;

Topic.propTypes = {
  index: PropTypes.number.isRequired,
  topicData: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

const TopicBox = styled.div`
  border: 1px solid #d6d6d6;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
