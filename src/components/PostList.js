import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Component } from 'react';

import { ActivityIndicator, Text, ListView, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import PostListItem from './PostListItem';

export default class PostList extends Component {

  constructor(props) {
    super(props);

    this.firstUrl = null;
    this.currentUrl = null;
    this.nextUrl = null;

    this.state = {
      isRefreshing: false,
      isLoading: false,
      posts: [],
      postIds: [],
      range: [0, 20],
    }

  }

  componentDidMount() {
    this.getPostsIds();
  }

  getPostsIds() {
    const discussionId = this.props.discussionId;

    this.setState({ isRefreshing: true });

    fetch("https://community.giffgaff.com/api/discussions/" + discussionId)
      .then(
        (res) => res.json()
      )
      .then((data) => {

        const posts = data['data']['relationships']['posts']['data'];
        const postIds = posts.map((post) => {
          return post['id'];
        });

        this.setState({
          isRefreshing: false,
          postIds: postIds
        });

        if(this.state.posts.length === 0) {
          this.getPosts();
        }
      })
      .catch(console.log);
  }

  getPosts() {
    this.setState({ isLoading: true });

    const [start, end] = this.state.range;
    const idFilter = this.state.postIds.splice(start, end).toString();    
    const url = 'https://community.giffgaff.com/api/posts?filter[id]=';
    const endpointUrl = url+idFilter;

    fetch(endpointUrl)
      .then(
        (res) => res.json()
      )
      .then((data) => {
        const posts = this.state.posts.concat(data['data']);

        this.setState({
          isRefreshing: false,
          isLoading: false,
          posts: posts,
          range: [start+20, end+20],
        });

      })
      .catch(console.log);
  }

  scroll() {
    console.log(this.state.isLoading)
    if(this.state.isLoading) { return }
    this.getPosts();
  }

  refresh() {

    this.setState({ 
      isRefreshing: true,
      posts: [],
      range: [0, 20],
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

      const postIds = this.state.postIds.map((post) => {
        return post['id'];
      });


    return (
      <FlatList
        refreshControl={
          <RefreshControl 
          refreshing={this.state.isRefreshing} 
          onRefresh={() => { this.refresh() }} />
        }
        onEndReachedThreshold={0.1}
        onEndReached={() => this.scroll()}
        data={dataKeys}
        ListFooterComponent={this.state.isLoading && <ActivityIndicator />}
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