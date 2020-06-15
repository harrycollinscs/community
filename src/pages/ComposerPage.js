import React, { Component } from 'react';
// import { SearchBar } from 'react-native-elements';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput

} from 'react-native';


export default class ComposerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          clearButtonMode={'while-editing'}
          blurOnSubmit={true}
          placeholder={'Title'}
        />
        <TextInput
          clearButtonMode={'while-editing'}
          blurOnSubmit={true}
          placeholder={'Content'}
        />
        <TextInput
          clearButtonMode={'while-editing'}
          blurOnSubmit={true}
          placeholder={'idk'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#FCC31E',
    height: 54,
  }
});
