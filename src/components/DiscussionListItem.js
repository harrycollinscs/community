import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class DiscussionListItem extends Component {

  render() {

    const { navigation } = this.props;
    const discussionId = this.props.discussion['id'];
    const { title, commentCount, views, createdAt, lastPostedAt, isSticky } = this.props.discussion.attributes;
  
    const excerptText = "Hi lovely giffgaffers, Every six months, we get together to select charities to donate to from your hard-earned Payback. This year, with everything going on, it seems more implementing is necessary and thus we will be looking into";
    const rand = Math.floor((Math.random() * 140) + 50);
    const trimmedExcerpt = excerptText.substring(0, rand) + "...";

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    const createdAtAgo = timeAgo.format(new Date(createdAt));
    const lastPostedAtAgo = timeAgo.format(new Date(lastPostedAt));

    const excerpt = <View></View>

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Discussion', { discussionId: discussionId, discussionTitle: title })}>
        <View style={styles.discussion}>
          <View style={styles.header}>
            <Text style={styles.username}>hxrrycollins</Text>
            <Text style={styles.createdAt}>{createdAtAgo}</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>
              {title}
            </Text>
            {/* {isSticky ?
              <Text style={styles.excerpt}>
                Hi lovely giffgaffers, Every six months, we get together to select charities to donate to from your hard-earned Payback. This year, with everything going on, it seems more imp...
              </Text> :
              <></>} */}
            <Text>
              {trimmedExcerpt}
            </Text>

          </View>


          <View style={styles.footer}>
            <Text style={styles.commentCount}>
              Comments: {commentCount.toString()}
            </Text>

            <Text style={styles.views}>
              Views: {views.toString()}
            </Text>

          </View>

        </View>
      </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  discussion: {
    backgroundColor: '#fff',
    borderBottomWidth: 2,
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
    // marginLeft: 15,
    // marginRight: 15,
    fontSize: 14,
    // backgroundColor: '#f5f5f5',
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