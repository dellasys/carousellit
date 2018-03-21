import React, { Component } from 'react';
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

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleInputChange(e) {
    const formObj = { ...this.state.topicForm };
    formObj[e.target.name] = e.target.value;

    this.setState({
      topicForm: formObj,
    });
  }

  saveTopic() {
    const { postTopic } = this.props;
    const { formType, topicForm } = this.state;
    postTopic({
      ...topicForm, type: formType, vote: 0, createdAt: new Date(),
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

  render() {
    // const {} = this.props;
    const { topicForm, formType } = this.state;

    return (
      <div>
        <h4>Post New Topic</h4>
        <TopicTabs
          formType={formType}
          changeFormType={type => this.changeFormType(type)}
        />
        <TopicForm
          topicForm={topicForm}
          formType={formType.toLowerCase()}
          handleInputChange={e => this.handleInputChange(e)}
        />
        <div>
          <button type="button" onClick={() => this.saveTopic()}>Post</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostTopic);
