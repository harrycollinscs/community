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

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export default class DiscussionListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member: null,
    }
  }

  componentDidMount() {
    this.getMember();
  }

  getMember() {
    const { user } = this.props.discussion.relationships;
    const memberId = user['data']['id'];
    const url = 'https://community.giffgaff.com/api/users/';

    fetch(url + memberId)
      .then(
        (res) => res.json()
      )
      .then((data) => {
        this.setState({
          member: data,
        });
      })
      .catch(console.log);
  }

  render() {
    if (!this.state.member) {
      return null;
    }

    const { navigation, discussion } = this.props;
    const discussionId = this.props.discussion['id'];
    const { title, commentCount, views, createdAt, lastPostedAt, isSticky } = discussion.attributes;
    const { user } = this.props.discussion.relationships;
    const memberId = user['data']['id'];

    const memberHasGroup = this.state.member['included'] !== undefined;
    let iconBorderColor = '#e9e9e9';
    if (memberHasGroup) {
      iconBorderColor = this.state.member['included'][0]['attributes']['color'];
    }

    const { attributes } = this.state.member['data'];
    const { displayName, avatarUrl } = attributes;

    const excerptText = "Hi lovely giffgaffers, Every six months, we get together to select charities to donate to from your hard-earned Payback. This year, with everything going on, it seems more implementing is necessary and thus we will be looking into";
    const rand = 140;
    const trimmedExcerpt = excerptText.substring(0, rand) + "...";

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    const createdAtAgo = timeAgo.format(new Date(createdAt));
    const lastPostedAtAgo = timeAgo.format(new Date(lastPostedAt));

    return (
      <TouchableHighlight onPress={() => navigation.navigate('Discussion', { discussionId: discussionId, discussionTitle: title, memberName: displayName })}>
        <View style={styles.discussion}>

          <View style={styles.iconContainer}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Profile', { memberId: memberId, memberName: displayName })}>
              <Image
                style={ [styles.memberIcon, memberHasGroup ? { 'borderColor': iconBorderColor } : { 'borderColor': iconBorderColor }] }
                source={{
                  uri: avatarUrl
                }}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.discussionText}>
            <View style={styles.header}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Profile', { memberId: memberId, memberName: displayName })}>
                <Text style={styles.username}>{displayName}</Text>
              </TouchableWithoutFeedback>
              <Text style={styles.createdAt}>{createdAtAgo}</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>
                {title}
              </Text>
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
    width: '18%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingTop: 20,
  },
  memberIcon: {
    borderRadius: 50,
    borderWidth: 2,
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'flex-start',
  },
  discussionText: {
    width: '82%',
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