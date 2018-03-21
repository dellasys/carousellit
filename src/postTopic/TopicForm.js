import React from 'react';
import PropTypes from 'prop-types';


const TopicForm = ({ topicForm, formType, handleInputChange }) => (
  <div>
    <div className="form-group">
      <label htmlFor="title">TITLE</label>
      <input type="text" className="form-control" value={topicForm.title} name="title" id="title" onChange={e => handleInputChange(e)} />
    </div>
    <div className="form-group">
      <label htmlFor="text">{formType.toUpperCase()}</label>
      <input type="text" className="form-control" value={topicForm[formType]} name={formType} id={formType} onChange={e => handleInputChange(e)} />
    </div>


  </div>
);

export default TopicForm;

TopicForm.propTypes = {
  topicForm: PropTypes.shape({}).isRequired,
  formType: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

