import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { ActivityIndicator, Text, RefreshControl, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DiscussionListItem from './DiscussionListItem';

export default class DiscussionList extends Component {

  constructor(props) {
    super(props);

    this.firstUrl = null;
    this.currentUrl = null;
    this.nextUrl = null;

    this.state = {
      isRefreshing: false,
      isLoading: true,
      firstLoadComplete: false,
      discussions: [],
    }
  }

  componentDidMount() {

    const { tagSlug } = this.props;
    const url = 'https://community.giffgaff.com/api/discussions?include=user%2ClastPostedUser%2Ctags%2CfirstPost%2Cpoll%2CrecipientUsers%2CrecipientGroups';
    const tagFilter = tagSlug === "" ? "" : `&filter%5Bq%5D=+tag%3A${tagSlug}`
    const endpointUrl = url+tagFilter;

    this.firstUrl = endpointUrl;
    this.getDiscussions(this.firstUrl);
    this.setState({ firstLoadComplete: true});
  }

  getDiscussions(url) {
    if(url === undefined || (this.currentUrl === this.nextUrl && this.currentUrl!=null)) { return }

    console.log(url)

    this.setState({ isLoading: true })

    fetch(url)
      .then(
        (res) => res.json()
      )
      .then((data) => {

        const discussions = this.state.discussions.concat(data['data']);

        this.currentUrl = data['links']['next'];

        this.setState({
          isRefreshing: false,
          isLoading: false,
          discussions: discussions,
        });
      })
      
      .catch(console.log);
  }

  scroll() {
    if(this.state.isLoading && this.state.firstLoadComplete) { return }
    this.getDiscussions(this.currentUrl);
  }


  refresh() {
    this.setState({ 
      isRefreshing: true,
    });

    this.currentUrl = this.firstUrl,
    this.nextUrl = null;

    this.getDiscussions(this.currentUrl);
  }

  render() {
    const { navigation } = this.props;
    const discussions = this.state.discussions;

    if (discussions.length === 0) {
      return <ActivityIndicator />
    }

    const dataKeys = discussions
      .filter((discussion) => discussion['type'] === 'discussions')
      .map((discussion) => {
        return (
          {
            key: discussion['id'],
            discussion: discussion,
          }
        )
      })

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


