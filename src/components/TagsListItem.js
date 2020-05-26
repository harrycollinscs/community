import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export default class TagsListItem extends Component {

  render() {

    const { navigation } = this.props;
    const { name, description, discussionCount, lastPostedAt } = this.props.tag.attributes;

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    const lastPostedAtAgo = timeAgo.format(new Date(lastPostedAt));

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Discussion List') }>
        <Card 
        style={styles.card}
        >
          <CardTitle
            style={styles.cardTitle}
            title={name}
            
          />
          <CardContent text={description} />
          <CardAction
            style={styles.cardAction}
            separator={true}
            inColumn={false}>
            <View>
              <Text style={styles.cardActionLastPosted}>
                LATEST POST  |  {lastPostedAtAgo.toUpperCase()}
              </Text>
              <Text style={styles.cardActionLastPostedTitle}>
                Title of first post goes here
              </Text>
            </View>
            {/* <CardButton
              style={styles.cardButton}
              onPress={() => { }}
              title="Share"
              color="#fcc31e"
            />
            <CardButton
              onPress={() => { }}
              title="Explore"
              color="#fcc31e"
            /> */}
          </CardAction>
        </Card>
      </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
  },
  cardTitle: {
    // fontWeight: 'bold',
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