import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,

} from 'react-native';

import DiscussionList from '../components/DiscussionList';
import DiscussionListBanner from '../components/DiscussionListBanner';

export default class DiscussionListPage extends Component {

  render() {
    const { navigation } = this.props;
    const { title, tagSlug } = this.props.route.params;
    return (
      <>
        <DiscussionListBanner title={title} />
        <DiscussionList 
          navigation={navigation} 
          tagSlug={tagSlug}
        />
      </>
    )
  }
}

