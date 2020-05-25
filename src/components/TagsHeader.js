import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, View } from 'react';

import { ActivityIndicator, StyleSheet, Text } from 'react-native';

export default class TagsHeader extends Component {

  render() {

    // const { item } = this.props;

    return (
      // <View >
        <Text style={styles.header}>Welcome to the giffgaff community</Text>
      // </View>
    );

  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eb5f8e',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
    margin: 0,
  }
})