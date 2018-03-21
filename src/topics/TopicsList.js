import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Topic from './Topic';

const TopicList = ({ topicsList }) => {
  /* Sort an array with descending order of vote number */
  const sortedTopics = [].concat(topicsList).sort((a, b) => b.vote - a.vote,
  );

  return (
    <div>
      <FlipMove duration={350} easing="ease-out">
        {/* Iterate sorted array into Topic component */
          sortedTopics.map((eachTopic, idx) =>
            <Topic key={eachTopic._id} index={idx} topicData={eachTopic} />,
          )
        }
      </FlipMove>
    </div>
  );
};

const mapStateToProps = state => ({
  topicsList: state.topics.topicsList,
});

TopicList.propTypes = {
  topicsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps)(TopicList);
