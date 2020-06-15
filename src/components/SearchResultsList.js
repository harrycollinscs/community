import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { View } from 'react-native';

import { ActivityIndicator, Text, RefreshControl, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SearchResultsListItem from './SearchResultsListItem';

export default class SearchResultsList extends Component {

  constructor(props) {
    super(props);

    this.currentUrl = null;
    this.nextUrl = null;

    this.state = {
      isLoading: false,
      searchValue: "",
      users: [],
    }
  }

  getSearchResults() {

    const { searchValue } = this.state;
    const url = `https://community.giffgaff.com/api/users?filter%5Bq%5D=${searchValue}&page%5Blimit%5D=10`;

    fetch(url)
      .then(
        (res) => res.json()
      )
      .then((data) => {

        this.currentUrl = data['links']['next'];

        this.setState({
          isLoading: false,
          users: data['data'],
        });

      })
      .catch(console.log);
  }

  loadMore(url) {

  }

  onScroll() {

  }

  onType(props) {
    if (props.searchValue !== this.state.searchValue) {
      this.setState({
        searchValue: props.searchValue
      });

      if (props.searchValue.length > 3) {
        this.getSearchResults();
      }

    };
  }

  render() {

    const props = this.props;
    this.onType(props);

    const { users } = this.state;

    if(users.length === 0) {
      return <View/>
    }

    const dataKeys = users
      .map((user) => {
        return (
          {
            key: user['id'],
            user: user,
          }
        )
      })

    return (
      <FlatList
        data={dataKeys}
        // style={{'marginTop': 10}}
        renderItem={
          ({ item }) =>
          <SearchResultsListItem 
            key={item.key}
            user={item.user}
          />
        }
      />
    )

    
  }
}


