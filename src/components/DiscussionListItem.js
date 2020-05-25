import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { StyleSheet, Text } from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'; 

export default class DiscussionListItem extends Component {

  render() {

    const { title, commentCount, createdAt, lastPostedAt } = this.props.attributes;

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    const createdAtAgo = timeAgo.format(new Date(createdAt));
    const lastPostedAtAgo = timeAgo.format(new Date(lastPostedAt));

    return (
      // <TouchableOpacity onPress={() => navigation.navigate('Discussion List') }>
        <Card 
        style={styles.card}
        >
          <CardTitle
            style={styles.cardTitle}
            title={title}
          />
          <CardContent>
            <Text>Created {createdAtAgo}</Text>
            <Text>Last replied to {lastPostedAtAgo}</Text>
            
          </CardContent> 
          {/* text="This is where the excerpt will be once it is figured out" /> */}
          
        </Card>
      // </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 12,
  },
  cardAction: {
    padding: 15
  },
  cardActionText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fcc31e',
  }

})