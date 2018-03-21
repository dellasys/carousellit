import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const URL = 'url';
const TEXT = 'text';

const TopicTabs = ({ formType, changeFormType }) => (
  <ul className="nav nav-tabs">
    <Tab role="presentation" className={formType === TEXT ? 'active' : ''}>
      <a href="#textTab" onClick={() => changeFormType(TEXT)}>{TEXT.toUpperCase()}</a>
    </Tab>
    <Tab role="presentation" className={formType === URL ? 'active' : ''}>
      <a href="#urlTab" onClick={() => changeFormType(URL)}>{URL.toUpperCase()}</a>
    </Tab>
  </ul>
);

export default TopicTabs;

TopicTabs.propTypes = {
  formType: PropTypes.string.isRequired,
  changeFormType: PropTypes.func.isRequired,
};

const Tab = styled.li`
    width: 50%;
`;
