import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

export default class SearchResultsListItem extends Component {

  render() {

    const { user } = this.props;
    const { username, avatarUrl } = user.attributes;

    return (
      <TouchableHighlight
      // onPress={() => navigation.navigate('Discussion', { discussionId: discussionId, discussionTitle: title, memberName: displayName })}
      >
        <View style={styles.discussion}>

          <View style={styles.iconContainer}>
            <TouchableWithoutFeedback
            // onPress={() => navigation.navigate('Profile', { memberId: memberId, memberName: displayName })}
            >
              <Image
                style={styles.memberIcon}
                source={{
                  uri: avatarUrl
                }}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.discussionText}>

            <View style={styles.header}>
              <TouchableWithoutFeedback
              // onPress={() => navigation.navigate('Profile', { memberId: memberId, memberName: displayName })}
              >
                <Text style={styles.username}>
                  {username}
                </Text>
              </TouchableWithoutFeedback>

            </View>

          </View>

        </View>
      </TouchableHighlight>
    );

  }
}

const styles = StyleSheet.create({
  discussion: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: '#f5f5f5',
  },
  iconContainer: {
    height: '100%',
    width: '15%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  memberIcon: {
    borderRadius: 50,
    borderWidth: 2,
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'flex-start',
  },
  discussionText: {
    width: '85%',
    marginRight: 20,
    marginTop: 10,
    textAlign: 'left',
    justifyContent: 'space-evenly'
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
    width: '60%',
    fontWeight: 'bold',
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