import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Topic from './Topic';

const TopicList = ({ topicsList }) => {
  const sortedTopics = [].concat(topicsList).sort((a, b) => a.vote < b.vote);

  return (
    <div>
      <FlipMove duration={750} easing="ease-out">
        {
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

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);


TopicList.propTypes = {
  topicsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
