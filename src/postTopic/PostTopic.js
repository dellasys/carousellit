/* eslint jsx-a11y/interactive-supports-focus:0,
  jsx-a11y/click-events-have-key-events:0,no-unused-vars:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { clear } from 'redux-localstorage-simple';
import randomstring from 'randomstring';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postTopic } from './actions';
import TopicTabs from './TopicTabs';
import TopicForm from './TopicForm';

class PostTopic extends Component {
  state = {
    topicForm: {
      text: '',
      url: '',
    },
    formType: 'text',
  }

  getId() {
    return randomstring.generate();
  }

  handleInputChange(e) {
    const formObj = { ...this.state.topicForm };
    formObj[e.target.name] = e.target.value;

    this.setState({
      topicForm: formObj,
    });
  }

  saveTopic() {
    /* eslint no-shadow:0 */
    const { postTopic } = this.props;
    const { formType, topicForm } = this.state;
    postTopic({
      _id: this.getId(),
      ...topicForm,
      type: formType,
      vote: 0,
      createdAt: new Date(),
    }); /* Dispatch action POST_TOPIC */
    this.setState({
      topicForm: {
        text: '',
        url: '',
      },
    });
  }

  changeFormType(type) {
    this.setState({
      formType: type,
    });
  }

  clearAndReload() {
    clear();
    window.location.reload();
  }

  render() {
    const { topicForm, formType } = this.state;

    return (
      <div>
        <div className="appHeader">
          <div className="headerTitle">
            <h4>Post New Topic</h4>
          </div>
          <div role="button" className="clearAllBtn" onClick={() => this.clearAndReload()}>
            <h5>Clear All</h5>
          </div>
        </div>
        <TopicTabs
          formType={formType}
          changeFormType={type => this.changeFormType(type)}
        />
        <TopicForm
          topicForm={topicForm}
          formType={formType.toLowerCase()}
          handleInputChange={e => this.handleInputChange(e)}
        />
        <div className="alignMiddle">
          <button className="btn btn-default" type="button" onClick={() => this.saveTopic()}>Post</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  postTopic,
}, dispatch);

PostTopic.propTypes = {
  postTopic: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(PostTopic);
