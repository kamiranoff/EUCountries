import React, { Component } from 'react';
import { Text, View } from "react-native";

class Countries extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <Text style={{ color: 'white' }}>Europe</Text>

      </View>

    );
  }
}

Countries.propTypes = {};

export default Countries;
