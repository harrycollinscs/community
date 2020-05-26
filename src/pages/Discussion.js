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
import PostList from '../components/PostList';


export default class Discussion extends Component {

  render() {
    const { discussionId, discussionTitle } = this.props.route.params;
    return (
      <PostList discussionId={discussionId} discussionTitle={discussionTitle}/>
    )
  }
}

