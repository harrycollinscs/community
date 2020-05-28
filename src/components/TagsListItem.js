import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export default class TagsListItem extends Component {

  render() {

    const { navigation } = this.props;
    const { name, description, discussionCount, lastPostedAt, slug } = this.props.tag.attributes;

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    const lastPostedAtAgo = timeAgo.format(new Date(lastPostedAt));

    return (

      <TouchableHighlight
        onPress={() => navigation.navigate('Discussion List', { title: name, tagSlug: slug })}
        style={styles.card}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>
              {name}
            </Text>
            <Text style={styles.description}>
              {description}
            </Text>
          </View>
          <View style={styles.cardAction} >
            <Text style={styles.cardActionLastPosted}>
              LATEST POST  |  {lastPostedAtAgo.toUpperCase()}
            </Text>
            <Text style={styles.cardActionLastPostedTitle}>
              Title of first post goes here
              </Text>
          </View>
        </View>
      </TouchableHighlight>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  card: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  content: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    marginTop: 10,
  },
  description: {
    color: 'grey',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardAction: {
    backgroundColor: '#000',
    padding: 20,
  },
  cardActionLastPosted: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fcc31e',
    padding: 2
  },
  cardActionLastPostedTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    padding: 2
  }

})