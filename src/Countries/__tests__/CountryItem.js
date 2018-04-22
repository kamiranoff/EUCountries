import React from 'react';
import renderer from 'react-test-renderer';
import CountryItem from '../CountryItem';

describe('CountryItem', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<CountryItem />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
