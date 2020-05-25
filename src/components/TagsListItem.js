import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TagsListItem extends Component {

  render() {

    const { item, navigation } = this.props;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Discussion List') }>
        <Card 
        style={styles.card}
        >
          <CardTitle
            style={styles.cardTitle}
            title={item}
            
          />
          <CardContent text="Read the community guidelines and check out the latest announcements from giffgaff." />
          <CardAction
            style={styles.cardAction}
            separator={true}
            inColumn={false}>
            <View>
              <Text style={styles.cardActionLastPosted}>
                LATEST POST  |  A DAY AGO
              </Text>
              <Text style={styles.cardActionLastPostedTitle}>
                2020 Charity Nominations - now open
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