import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export default class PostListItem extends Component {

  render() {
    const { discussionTitle } = this.props;
    const { number, contentHtml, createdAt } = this.props.post;
    const isFirstPost = number === 1;

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    // const createdAtAgo = timeAgo.format(new Date(createdAt));
    const editedAtAgo = timeAgo.format(new Date(createdAt));

    return (
      <View style={styles.discussion}>
        <View style={styles.header}>
          <Text style={styles.username}>hxrrycollins</Text>
          <Text style={styles.createdAt}>
            {editedAtAgo}
          </Text>
        </View>

        <View style={styles.content}>
          {isFirstPost ?
            <Text style={styles.title}>
              {discussionTitle}
            </Text> :
            <></>
          }
          <Text style={styles.excerpt}>
            {contentHtml ? contentHtml.replace(/(<([^>]+)>)/ig, "") : ""}
          </Text>
        </View>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  discussion: {
    backgroundColor: '#fff',
    borderBottomWidth: 4,
    borderColor: '#f5f5f5',
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
  },
  excerpt: {
    fontSize: 14,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 14,
  },
  commentCount: {
    color: 'grey',
    width: '50%',
  },
  views: {
    textAlign: 'right',
    color: 'grey',
    width: '50%',
  }

})