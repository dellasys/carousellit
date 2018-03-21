/* eslint jsx-a11y/interactive-supports-focus:0,
  jsx-a11y/click-events-have-key-events:0,no-unused-vars:0,
  jsx-a11y/no-noninteractive-element-to-interactive-role:0 */
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
    /* Generate a combination of 32 characters id from numbers and alphabets */
    return randomstring.generate();
  }

  handleInputChange(e) {
    const formObj = { ...this.state.topicForm };
    formObj[e.target.name] = e.target.value;

    this.setState({
      topicForm: formObj,
    });
  }

  saveTopic(e) {
    e.preventDefault();
    /* eslint no-shadow:0 */
    const { postTopic } = this.props;
    const { formType, topicForm } = this.state;
    /* Dispatch action POST_TOPIC to save topic value */
    postTopic({
      _id: this.getId(),
      ...topicForm,
      type: formType,
      vote: 0, /* Vote default value set 0 */
      createdAt: new Date(),
    });
    /* Clear input after saving topic value */
    this.setState({
      topicForm: {
        text: '',
        url: '',
      },
    });
  }

  changeFormType(type) {
    /* Selected form type */
    this.setState({
      formType: type,
    });
  }

  clearAndReload() {
    /* Clear localStorage data and refresh */
    clear();
    window.location.reload();
  }

  render() {
    const { topicForm, formType } = this.state;

    return (
      <div>
        <form onSubmit={e => this.saveTopic(e)}>
          <div className="appHeader">
            <div className="headerTitle">
              <h4>Post New Topic</h4>
            </div>
            <div className="clearAllBtn">
              <h5 role="button" onClick={() => this.clearAndReload()}>Clear All</h5>
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
            <button className="btn btn-default" type="submit">Post</button>
          </div>
        </form>
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
