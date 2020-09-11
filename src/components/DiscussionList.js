import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Text, RefreshControl, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DiscussionListItem from './DiscussionListItem';

import { getDiscussions } from '../store/actions';

class DiscussionList extends Component {

  constructor(props) {
    super(props);

    this.firstUrl = null;
    this.currentUrl = null;
    this.nextUrl = null;

    this.state = {
      isRefreshing: false,
      discussions: [],
    }
  }

  componentDidMount() {

    const { tagSlug } = this.props;
    const url = 'https://community.giffgaff.com/api/discussions?include=user%2ClastPostedUser%2Ctags%2CfirstPost%2Cpoll%2CrecipientUsers%2CrecipientGroups';
    const tagFilter = tagSlug === "" ? "" : `&filter%5Bq%5D=+tag%3A${tagSlug}`
    const endpointUrl = url + tagFilter;

    this.firstUrl = endpointUrl;
    this.props.getDiscussions(this.firstUrl);
  }

  loadMore(url) {
    if (url === undefined || (this.currentUrl === this.nextUrl && this.currentUrl != null)) { return }

    // this.setState({ isLoading: true })

    fetch(url)
      .then(
        (res) => res.json()
      )
      .then((data) => {

        const discussions = this.state.discussions.concat(data['data']);
        this.currentUrl = data['links']['next'];

        this.setState({
        //   isLoading: false,
          discussions: discussions,
        });
      })

      .catch(console.log);
  }

  scroll() {
    if (this.props.isLoading && this.props.firstLoadComplete) { return }
    this.loadMore(this.currentUrl);
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
    const { navigation, discussions } = this.props;

    console.log(discussions);

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
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
        onEndReached={() => {
          if (!this.onEndReachedCalledDuringMomentum) {
            this.scroll();
            this.onEndReachedCalledDuringMomentum = true;
          }
        }}
        data={dataKeys}
        ListFooterComponent={this.props.isLoading && <ActivityIndicator />}
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

const mapStateToProps = store => ({
    discussions: store.discussions.discussions,
    firstLoadComplete: store.discussions.firstLoadComplete,
    isLoading: store.discussions.isLoading,
});

export default connect(mapStateToProps, { getDiscussions })(DiscussionList);
