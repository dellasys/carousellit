import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upVote, downVote } from '../postTopic/actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowUp from '../arrows/arrow_up.png';
import arrowDown from '../arrows/arrow_down.png';

class Votes extends Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const {
      voteNum, upVote, downVote, topicId,
    } = this.props;

    return (
      <div className="align_middle">
        <div role="button" onClick={() => upVote(topicId)}>
          <ArrowImg alt="up vote" src={arrowUp} />
        </div>
        <div>{voteNum}</div>
        <div role="button" onClick={() => downVote(topicId)}>
          <ArrowImg alt="down vote" src={arrowDown} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  upVote, downVote,
}, dispatch);

Votes.propTypes = {
  topicId: PropTypes.string.isRequired,
  voteNum: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Votes);

const ArrowImg = styled.img`
    width: 20px
`;
