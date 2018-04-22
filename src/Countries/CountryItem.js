import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    margin: 10,
    padding: 10,
  },
});

const CountryItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={{ fontWeight: '600' }}>{item.name}</Text>
    <Text>{item.subregion}</Text>
    <Text>{item.capital}</Text>
    <Text>Lang: {item.languages[0].name}</Text>
  </View>
);

CountryItem.defaultProps = {
  item: {
    name: '',
    subregion: '',
    capital: '',
    languages: [{ name: '' }],
  },
};

CountryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    subregion: PropTypes.string,
    capital: PropTypes.string,
    languages: PropTypes.array,
  }),
};

export default CountryItem;
