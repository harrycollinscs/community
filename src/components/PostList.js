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
      isLoading: true,
      firstLoadComplete: false,
      posts: [],
      postIds: [],
      range: [],
    }

  }

  componentDidMount() {
    this.getPostsIds();
  }

  getPostsIds() {
    const discussionId = this.props.discussionId;

    this.setState({ 
      isRefreshing: true,
      isLoading: true, 
    });

    fetch("https://community.giffgaff.com/api/discussions/" + discussionId)
      .then(
        (res) => res.json()
      )
      .then((data) => {

        const posts = data['data']['relationships']['posts']['data'];
        const postIds = posts.map((post) => {
          return post['id'];
        });

        const numberOfPosts = postIds.length;
        const upperBound = numberOfPosts < 20 ? numberOfPosts : 20;

        this.setState({
          isRefreshing: false,
          postIds: postIds,
          range: [0, upperBound]
        });

        if(this.state.posts.length === 0) {
          this.getPosts();
        }
      })
      .catch(console.log);
  }

  getPosts() {

    const [start, end] = this.state.range;
    const idFilter = this.state.postIds.slice(start, end).toString();    
    const url = 'https://community.giffgaff.com/api/posts?filter[id]=';
    const endpointUrl = url+idFilter;

    this.setState({ isLoading: true });

    fetch(endpointUrl)
      .then(
        (res) => res.json()
      )
      .then((data) => {
        const posts = this.state.posts.concat(data['data']);

        const postsRemaining = this.state.postIds.length - end;
        const upperBound = postsRemaining < 20 ? end+postsRemaining : end+20;

        this.setState({
          isRefreshing: false,
          isLoading: false,
          firstLoadComplete: true,
          posts: posts,
          range: [end, upperBound],
        });

      })
      .catch(console.log);
  }

  scroll() {
    const { range, postIds, isLoading, firstLoadComplete } = this.state;
    if(range[1] === postIds.length || isLoading || !firstLoadComplete) { return }

    this.getPosts();
  }

  refresh() {
    this.getPostsIds();
    this.setState({ isLoading: false })
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
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
        onEndReached={() => {
          if (!this.onEndReachedCalledDuringMomentum) {
            this.scroll();
            this.onEndReachedCalledDuringMomentum = true;
          }
        }}
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