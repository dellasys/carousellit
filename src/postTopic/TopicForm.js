/* eslint jsx-a11y/label-has-for:0 */
import React from 'react';
import PropTypes from 'prop-types';

const TopicForm = ({ topicForm, formType, handleInputChange }) => (
  <div>
    {/* URL input box will be displayed if formType is url */
      formType === 'url' &&
      <div className="form-group">
        <label htmlFor="text">{formType.toUpperCase()}</label>
        <input type="text" className="form-control" maxLength="255" rows="3" value={topicForm[formType]} name={formType} id={formType} onChange={e => handleInputChange(e)} />
      </div>
    }
    <div className="form-group">
      <label htmlFor="text">TEXT</label>
      <textarea className="form-control" maxLength="255" rows="3" value={topicForm.text} name="text" id="text" onChange={e => handleInputChange(e)} />
      <div className="textCounter">{topicForm.text.length}/255</div>
    </div>

  </div>
);

export default TopicForm;

TopicForm.propTypes = {
  topicForm: PropTypes.shape({}).isRequired,
  formType: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

