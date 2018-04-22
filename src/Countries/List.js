import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import CountryItem from './CountryItem';

const List = ({ navigation: { state: { params } } }) => (
  <FlatList
    data={params.countries}
    renderItem={({ item }) => <CountryItem item={item} />}
    keyExtractor={(item, index) => `country-list${index}`}
  />
);

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default List;
