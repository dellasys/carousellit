import React from 'react';
import PropTypes from 'prop-types';

const URL = 'url';
const TEXT = 'text';


const TopicTabs = ({ formType, changeFormType }) => (
  <ul className="nav nav-tabs nav-justified">
    <li role="presentation" className={formType === TEXT ? 'active' : ''}>
      <a href="#textTab" onClick={() => changeFormType(TEXT)}>{TEXT.toUpperCase()}</a>
    </li>
    <li role="presentation" className={formType === URL ? 'active' : ''}>
      <a href="#urlTab" onClick={() => changeFormType(URL)}>{URL.toUpperCase()}</a>
    </li>
  </ul>
);

export default TopicTabs;

TopicTabs.propTypes = {
  formType: PropTypes.string.isRequired,
  changeFormType: PropTypes.func.isRequired,
};

