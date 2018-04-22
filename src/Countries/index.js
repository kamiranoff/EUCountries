import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import List from './List';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  title: {
    color: 'white',
    padding: 10,
    fontSize: 20,
    fontWeight: '900',
  },
});

const Countries = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Europe</Text>
    <List {...props} />
  </View>
);


Countries.propTypes = {};

export default Countries;
