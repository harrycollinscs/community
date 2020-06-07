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
import SearchBar from '../components/SearchBar';



export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    }
  }

  onChangeText(text) {
    this.setState({ searchValue: text })
  }

  render() {
    return (
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={this.onChangeText.bind(this)}
          value={this.state.searchValue}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#FCC31E',
    height: 50,
  }
});
