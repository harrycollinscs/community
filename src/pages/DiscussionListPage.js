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

export default class DiscussionListPage extends Component {

  render() {
    return (
      <>
        <WelcomeBannerBlue />
        <DiscussionList />
      </>
    )
  }
}

