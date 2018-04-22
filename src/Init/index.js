import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InitView from './InitView';

class Init extends Component {
  state = {
    countries: {},
    error: {},
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;capital;subregion;languages')
      .then(response => response.json())
      .then(response => this.setState({ countries: response }))
      .catch(error => this.setState({ error }));
  }

  handlePress = () => {
    const { countries } = this.state;
    const { navigation } = this.props;
    navigation.navigate('Countries', { countries });
  }

  render() {
    return (
      <InitView handlePress={this.handlePress} />
    );
  }
}

Init.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Init.navigationOptions = {
  header: null,
};

export default Init;
