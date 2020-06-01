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

import TagsList from '../components/TagsList';
import TagsHeader from '../components/WelcomeBannerPink';


export default class Home extends Component {

  render() {

    const { navigation } = this.props;

    return (
      <>
        <TagsHeader />
        <TagsList navigation={navigation} />
      </>
    )
  }
}