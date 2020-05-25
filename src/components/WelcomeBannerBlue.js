import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, View } from 'react';

import { ActivityIndicator, StyleSheet, Text } from 'react-native';

export default class WelcomeBannerBlue extends Component {

  render() {

    return (
        <Text style={styles.header}>Welcome to the giffgaff community</Text>
    );

  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#35adce',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
    margin: 0,
  }
})