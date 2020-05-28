import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class WelcomeBannerPink extends Component {

  render() {

    return (
        <Text style={styles.header}>
          Welcome to the giffgaff community
        </Text>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
  },
  header: {
    width: '100%',
    // height: '10%',
    backgroundColor: '#eb5f8e',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
  }
})