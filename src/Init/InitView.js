import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countries: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: '10%',
    backgroundColor: 'blue',
    padding: 20,
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
});
const InitView = ({ handlePress }) => (
  <View style={styles.container}>
    <Text style={styles.countries}>EU</Text>
    <Text style={styles.countries}>COUNTRIES</Text>
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>START</Text>
    </TouchableOpacity>
  </View>
);

InitView.propTypes = {
  handlePress: PropTypes.func.isRequired,
};

export default InitView;
