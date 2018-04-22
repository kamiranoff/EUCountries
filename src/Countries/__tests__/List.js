import React from 'react';
import renderer from 'react-test-renderer';
import List from '../List';

const countries = [{ name: 'France', subregion: 'Western eu', capital: 'Paris', languages: [{ name: 'French' }] }]
const navigation = { navigate: jest.fn(), state: { params: { countries } } };

describe('List', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<List navigation={navigation} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
})