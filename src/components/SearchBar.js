import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, View } from 'react';

import { StyleSheet, Text, TextInput } from 'react-native';

export default class SearchBar extends Component {

  render() {

    return (
      <TextInput
        style={styles.searchBar}
        onChangeText={text => this.props.onChangeText(text)}
        value={this.props.value}
      />
    );

  }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#fff',
    height: 35,
    // borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    padding: 10 ,
  }
})