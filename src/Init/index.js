import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InitView from './InitView';

class Init extends Component {
  state = {
    countries: {},
    error: '',
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;capital;subregion;languages')
      .then(response => response.json())
      .then(response => this.setState({ countries: response }))
      .catch(error => this.setState({ error: 'Could not download the countries' }));
  }

  handlePress = () => {
    const { countries } = this.state;
    const { navigation } = this.props;
    navigation.navigate('Countries', { countries });
  }

  render() {
    return (
      <InitView handlePress={this.handlePress} error={this.state.error} />
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
