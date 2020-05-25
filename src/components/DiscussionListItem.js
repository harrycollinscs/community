import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class DiscussionListItem extends Component {

  render() {

    const { navigation } = this.props;
    const { title, commentCount, createdAt, lastPostedAt } = this.props.attributes;

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    const createdAtAgo = timeAgo.format(new Date(createdAt));
    const lastPostedAtAgo = timeAgo.format(new Date(lastPostedAt));

    return (
      // <TouchableOpacity onPress={() => navigation.navigate('Discussion List')}>
      <View style={styles.discussion}>
        <View style={styles.header}>
          <Text style={styles.username}>hxrrycollins</Text>
          <Text style={styles.createdAt}>{createdAtAgo}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.excerpt}>
            Hi lovely giffgaffers, Every six months, we get together to select charities to donate to from your hard-earned Payback. This year, with everything going on, it seems more imp...
            </Text>
        </View>

        <View style={styles.footer}>
          {/* <FontAwesomeIcon icon={ faCoffee }/> */}
          <Text>Last replied to {lastPostedAtAgo}</Text>
        </View>

      </View>
      // </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  discussion: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    padding: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  username: {
    color: 'grey',
    width: '60%',
  },
  createdAt: {
    textAlign: 'right',
    color: 'grey',
    width: '40%',
  },
  content: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    // marginLeft: 15,
    // marginRight: 15,
  },
  excerpt: {
    // marginLeft: 15,
    // marginRight: 15,
    fontSize: 14,
    // backgroundColor: '#f5f5f5',
  },
  footer: {
    paddingTop: 0,
    padding: 5,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 14,
  }

})