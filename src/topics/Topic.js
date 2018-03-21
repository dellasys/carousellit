import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Votes from './Votes';

const topicNumStyle = {
  float: 'right',
};

class Topic extends PureComponent {
  render() {
    const { index, topicData } = this.props;
    /* Append http:// if invalid URL */
    const topicUrl = (!topicData.url.match(/^[a-zA-Z]+:\/\//) ? `http://${topicData.url}` : topicData.url);

    return (
      <TopicBox>
        <div className="topicVoteDiv align_middle">
          <div className={`label label-${topicData.type === 'text' ? 'primary' : 'danger'}`}>
            {topicData.type.toUpperCase()}
          </div>
          <div>
            <Votes topicId={topicData._id} voteNum={topicData.vote} />
          </div>
        </div>
        <div className="topicContentDiv">
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
        <div className="topicNumberDiv">
          <span style={topicNumStyle}>{index + 1}</span>
        </div>
      </TopicBox>);
  }
}

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
  display: flex;
`;
