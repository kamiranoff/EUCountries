import React from 'react';
import renderer from 'react-test-renderer';
import InitView from '../InitView';

describe('InitView', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<InitView handlePress={() => null} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
})