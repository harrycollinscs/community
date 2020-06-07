import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, View } from 'react';

import { StyleSheet, Text } from 'react-native';

export default class DiscussionListBanner extends Component {

  render() {
    const { title } = this.props;

    return (
        <Text style={styles.header}>{ title }</Text>
    );

  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#EB5F8E',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
    margin: 0,
  }
})