import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Component } from 'react';

import { ActivityIndicator, Text, ListView, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import MemberPostListItem from './MemberPostListItem';

export default class MemberPostList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
      isLoading: true,
      posts: [],
    }

  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    const { memberId } = this.props;
    const url = `https://community.giffgaff.com/api/posts?filter%5Buser%5D=${memberId}&filter%5Btype%5D=comment&page%5Blimit%5D=20&sort=-createdAt`;

    this.setState({ isLoading: true });

    fetch(url)
      .then(
        (res) => res.json()
      )
      .then((data) => {

        this.setState({
          isRefreshing: false,
          isLoading: false,
          firstLoadComplete: true,
          posts: data['data'],
        });

      })
      .catch(console.log);
  }

  refresh() {
    this.getPosts();
    this.setState({ isLoading: false })
  }

  render() {
    const posts = this.state.posts;
    // const {  } = this.props;

    if (posts.length === 0) {
      return <ActivityIndicator />
    }

    const dataKeys = posts
      .filter(post => post['type'] === 'posts')
      .map((post) => {
        const key = post['attributes']['number'].toString();

        return (
          {
            key: key,
            post: post,
          }
        )
      });

    return (
      <FlatList
        refreshControl={
          <RefreshControl 
          refreshing={this.state.isRefreshing} 
          onRefresh={() => { this.refresh() }} />
        }

        data={dataKeys}
        ListFooterComponent={this.state.isLoading && <ActivityIndicator />}
        renderItem={
          ({ item }) =>
            <MemberPostListItem
              key={item.key}
              post={item.post}
              // navigation={navigation}
            />
        }
      />
    )

  }
}