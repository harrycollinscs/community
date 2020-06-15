import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export default class MemberPostListItem extends Component {
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
    const { user } = this.props.post.relationships;
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

    const { post } = this.props;
    const { number, contentHtml, createdAt } = post.attributes;
    const memberId = post.relationships.user.data.id;

    let content = contentHtml.replace(/(<([^>]+)>)/ig, "")
    content = content.length > 100 ? content.substring(0, 100)+"..." : content;

    const { attributes } = this.state.member['data'];
    const { displayName, avatarUrl } = attributes;

    const memberHasGroup = this.state.member['included'] !== undefined;
    let iconBorderColor = '#e9e9e9';
    if (memberHasGroup) {
      iconBorderColor = this.state.member['included'][0]['attributes']['color'];
    }

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    const createdAtAgo = timeAgo.format(new Date(createdAt));

    return (
      <View style={styles.post}>

        <View style={styles.iconContainer}>
          <Image
            style={[styles.memberIcon, memberHasGroup ? { 'borderColor': iconBorderColor } : { 'borderColor': iconBorderColor }]}
            source={{
              uri: avatarUrl
            }}
          />
        </View>

        <View style={styles.postText}>

          <View style={styles.header}>
            <Text style={styles.username}>
              {displayName}
            </Text>
            <Text style={styles.createdAt}>
              {createdAtAgo}
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.excerpt}>
              {content}
            </Text>
          </View>

        </View>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  firstPost: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 4,
    borderColor: '#f5f5f5',
    padding: 5,
  },
  post: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 4,
    borderColor: '#f5f5f5',
    padding: 5,
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
    borderColor: '#f5f5f5',
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'flex-start',
  },
  postText: {
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
    fontWeight: 'bold'
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