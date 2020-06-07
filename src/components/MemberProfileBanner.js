import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export default class MemberProfileBanner extends Component {

  render() {
    const { displayName, avatarUrl, bio, lastSeenAt, joinTime } = this.props.attributes;

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    const lastSeenAtAgo = timeAgo.format(new Date(lastSeenAt));
    const joinTimeAgo = timeAgo.format(new Date(joinTime));

    return (
      <View style={styles.container}>

        <View style={styles.banner}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.memberIcon}
              source={{
                uri: avatarUrl
              }}
            />
          </View>
          <View style={styles.bannerText}>
            {/* <Text style={styles.displayName}>
              {displayName}
            </Text> */}
            <Text style={styles.bio}>
              {bio}
            </Text>
            <View style={styles.datesContainer}>
              <Text style={styles.lastSeenAt}>
                Last online: {lastSeenAtAgo}
              </Text>
              <Text style={styles.joinTime}>
                Joined: {joinTimeAgo}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '15%',
  },
  banner: {
    backgroundColor: '#ea5b25',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    height: '15%',
    alignItems: 'center'
  },
  iconContainer: {
    height: '60%',
    width: '20%',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberIcon: {
    height: '50%',
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 50,
    flex: 1,
    aspectRatio: 1,
  },
  bannerText: {
    textAlign: 'right',
    color: 'grey',
    width: '65%',
    marginRight: 20,
    marginTop: 15,
    textAlign: 'left',
    justifyContent: 'space-evenly'
  },
  displayName: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    marginTop: 20,
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 5,
  },
  datesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: 5,

  },
  lastSeenAt: {
    color: '#ffffff',
    fontSize: 10,
    width: '50%',
  },
  joinTime: {
    color: '#ffffff',
    fontSize: 10,
    width: '50%',
    textAlign: 'right',
  },





})