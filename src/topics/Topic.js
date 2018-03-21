import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Votes from './Votes';
import TopicNumber from './TopicNumber';
import TopicContent from './TopicContent';
import TopicTypeLabel from './TopicTypeLabel';

class Topic extends PureComponent {
  checkIfStringIsValidUrl(data) {
    if (data.indexOf('http://') === 0 || data.indexOf('https://') === 0) {
      /* Return true if 'http://' or 'https://' is found */
      return true;
    }
    return false;
  }

  render() {
    const { index, topicData } = this.props;
    /* Append 'http://' if URL is invalid */
    const topicUrl = (this.checkIfStringIsValidUrl(topicData.url) ? topicData.url : `http://${topicData.url}`);

    return (
      <TopicBox>
        <div className="topicVoteDiv alignMiddle">
          <TopicTypeLabel topicData={topicData} />
          <div>
            <Votes topicId={topicData._id} voteNum={topicData.vote} />
          </div>
        </div>
        <div className="topicContentDiv">
          <TopicContent topicUrl={topicUrl} topicData={topicData} />
        </div>

        <div className="topicNumberDiv">
          <TopicNumber index={index} />
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
