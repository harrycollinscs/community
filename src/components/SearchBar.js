import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch as SearchSolid } from '@fortawesome/free-solid-svg-icons';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: true,
    }
  }

  render() {
    const { isFocused } = this.state;

    return (
      <View style={styles.container}>
      <View style={[styles.searchBar, {'width': isFocused ? '75%' : '95%'}]}>
        <FontAwesomeIcon icon={SearchSolid} style={styles.searchIcon} />
        <TextInput
          autoFocus={true}
          clearButtonMode={'while-editing'}
          blueOnSubmit={true}
          onFocus={() => this.setState({ isFocused: true })}
          onBlur={() => this.setState({ isFocused: false })}
          style={styles.searchTextInput}
          onChangeText={text => this.props.onChangeText(text)}
          value={this.props.value}
          placeholder={'Search the community'}
        />
        
      </View>
      {isFocused &&
        <TouchableWithoutFeedback
          style={styles.cancelButton}
          onPress={() => {
            this.setState({ isFocused: false });
            Keyboard.dismiss();
          }}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableWithoutFeedback>
      }
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 0,

  },
  searchBar: {
    backgroundColor: '#fff',
    height: 35,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    display: 'flex',
    color: '#d5d5d5',
    fontWeight: '100',
    marginLeft: 10,
  },
  searchTextInput: {
    marginLeft: 10,
    marginRight: 20,
    width: '90%',
  },
  cancelButton: {
    color: '#000',
    padding: 10,
    paddingTop: 20,
  }
})