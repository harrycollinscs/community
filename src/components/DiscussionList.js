import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Text, RefreshControl, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DiscussionListItem from './DiscussionListItem';

import { getDiscussions, refreshDiscussions } from '../store/actions';

class DiscussionList extends Component {

  constructor(props) {
    super(props);

    this.firstUrl = null;
  }

  componentDidMount() {
    const { tagSlug } = this.props;
    const url = 'https://community.giffgaff.com/api/discussions?include=user%2ClastPostedUser%2Ctags%2CfirstPost%2Cpoll%2CrecipientUsers%2CrecipientGroups';
    const tagFilter = tagSlug === "" ? "" : `&filter%5Bq%5D=+tag%3A${tagSlug}`
    const endpointUrl = url + tagFilter;

    this.firstUrl = endpointUrl;
    this.props.getDiscussions(this.firstUrl);
  }

  scroll() {
    if (this.props.isLoading && this.props.firstLoadComplete) { return }

    this.props.getDiscussions(this.props.links.next);
  }

  refresh() {
    this.props.refreshDiscussions();
    this.props.getDiscussions(this.firstUrl);
  }

  render() {
    const { navigation, discussions } = this.props;

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
          <RefreshControl  onRefresh={() => { this.refresh() }} />
        }
        onEndReachedThreshold={1}
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
    links: store.discussions.links,
    firstLoadComplete: store.discussions.firstLoadComplete,
    isLoading: store.discussions.isLoading,
});

export default connect(mapStateToProps, { getDiscussions, refreshDiscussions })(DiscussionList);
