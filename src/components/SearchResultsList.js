import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { ActivityIndicator, Text, RefreshControl, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DiscussionListItem from './DiscussionListItem';

export default class SearchResultsList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { searchValue } = this.props.state;
  }

  render() {

    return (
      <FlatList
        refreshControl={
          <RefreshControl refreshing={this.state.isRefreshing} onRefresh={() => { this.refresh() }} />
        }
        onEndReachedThreshold={0.01}
        onEndReached={() => this.scroll()}
        data={dataKeys}
        ListFooterComponent={this.state.isLoading && <ActivityIndicator />}
        renderItem={
          ({ item }) =>
            <DiscussionListItem
              key={item.key}
              discussion={item.discussion}
              navigation={navigation}
            />
        }
      />
    )
  }
}


