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
import WelcomeBannerBlue from '../components/WelcomeBannerBlue';
import DiscussionListBanner from '../components/DiscussionListBanner';

export default class DiscussionListPage extends Component {

  render() {
    const { navigation } = this.props;
    const { tagSlug } = this.props.route.params;
    console.log(tagSlug)
    return (
      <>
        <DiscussionListBanner tagSlug={tagSlug} />
        <DiscussionList 
          navigation={navigation} 
          tagSlug={tagSlug}
        />
      </>
    )
  }
}

