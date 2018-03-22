/* eslint no-undef:0 */
import React from 'react';
import { shallow } from 'enzyme';
import TopicNumber from './TopicNumber';

it('TopicNumber index calculation', () => {
  // shallow(<TopicNumber index={1} />);
  const wrapper = shallow(<TopicNumber index={6} />);
  const display = <span>{7}</span>;

  expect(wrapper.contains(display)).toEqual(true);
});

