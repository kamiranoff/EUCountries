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
    fontWeight: '900',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '10%',
  },
  button: {
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
  error: {
    color: 'red',
    textAlign: 'center',
  },
  errorButton: {
    opacity: 0.5,
  },
});
const InitView = ({ handlePress, error }) => (
  <View style={styles.container}>
    <Text style={styles.countries}>EU</Text>
    <Text style={styles.countries}>COUNTRIES</Text>
    {error &&
    <Text style={styles.error}>Could not download data. Please make sure you are connected to the internet</Text>}
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress} disabled={!!error}>
      <View style={[styles.button, !!error && styles.errorButton]}>
        <Text style={styles.buttonText}>START</Text>
      </View>
    </TouchableOpacity>
  </View>
);

InitView.propTypes = {
  handlePress: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default InitView;
