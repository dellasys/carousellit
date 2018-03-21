/* eslint no-shadow:0,
    jsx-a11y/interactive-supports-focus:0,
    jsx-a11y/click-events-have-key-events:0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upVote, downVote } from '../postTopic/actions';
import arrowUp from '../arrows/arrow_up.png';
import arrowDown from '../arrows/arrow_down.png';

const Votes = ({
  voteNum, upVote, downVote, topicId,
}) => (
  <div className="alignMiddle">
    {/*  Dispatcher upVote increase vote number by 1 */}
    <div role="button" onClick={() => upVote(topicId)}>
      <ArrowImg alt="up vote" src={arrowUp} />
    </div>
    <div>{voteNum}</div>
    {/*  Dispatcher downVote crease vote number by 1 */}
    <div role="button" onClick={() => downVote(topicId)}>
      <ArrowImg alt="down vote" src={arrowDown} />
    </div>
  </div>
);

/* eslint no-unused-vars:0 */
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
