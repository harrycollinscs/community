import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Component } from 'react';

import { ActivityIndicator, Text, ListView, RefreshControl, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import PostListItem from './PostListItem';

export default class PostList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
      posts: [],
    }

  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    const discussionId = this.props.discussionId;

    this.setState({ isRefreshing: true });

    fetch("https://community.giffgaff.com/api/discussions/" + discussionId)
      .then(
        (res) => res.json()
      )
      .then((data) => {
        this.setState({
          posts: data['included'],
        });
        this.setState({ isRefreshing: false });
      })
      .catch(console.log);
  }

  refresh() {
    this.setState({ 
      isRefreshing: true,
      posts: [],
      currentUrl: this.state.firstUrl,
    });

    this.getPosts();
  }

  render() {
    const posts = this.state.posts;
    const { discussionTitle, navigation } = this.props;

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
          <RefreshControl refreshing={this.state.isRefreshing} onRefresh={() => { this.getPosts() }} />
        }
        data={dataKeys}
        renderItem={
          ({ item }) =>
            <PostListItem
              key={item.key}
              post={item.post}
              discussionTitle={discussionTitle}
              navigation={navigation}
            />
        }
      />
    )

  }
}