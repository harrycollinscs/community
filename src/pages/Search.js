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
import SearchResultsList from '../components/SearchResultsList';



export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    }
  }

  onChangeText(text) {
    this.setState({ searchValue: text });
  }

  render() {
    const { searchValue } = this.state;

    return (
      <View>
        <SearchBar
          onChangeText={this.onChangeText.bind(this)}
          value={this.state.searchValue}
        />
        <SearchResultsList
          searchValue={ searchValue }
        />
      </View>
    )
  }
}

