import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Component } from 'react';

import { ActivityIndicator, Text, ListView, RefreshControl, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DiscussionListItem from './DiscussionListItem';

export default class DiscussionList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
      discussions: [],
    }

  }

  componentDidMount() {
    this.getDiscussions();
  }

  getDiscussions() {

    this.setState({isRefreshing: false});

    fetch("https://community.giffgaff.com/api/discussions")
      .then(
        (res) => res.json()
      )
      .then((data) => {
        this.setState({
          discussions: data['data'],
        });
        this.setState({isRefreshing: false});
      })
      .catch(console.log);
  }

  render() {

    if (this.state.discussions.length === 0) {
      return <ActivityIndicator />
    }

    const discussions = this.state.discussions;

    const dataKeys = discussions.map((discussions) => {
      return (
        {
          key: discussions['id'],
          attributes: discussions['attributes'],
        }
      )
    })

    return (
      <FlatList
        refreshControl={
          <RefreshControl refreshing={this.state.isRefreshing} onRefresh={() => {this.getDiscussions()}} />
        }
        data={dataKeys}
        renderItem={
          ({ item }) =>
            <DiscussionListItem
              key={item.key}
              attributes={item.attributes}
            />
        }
      />
    )

  }
}