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

export default class PostListItem extends Component {
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
          member: data['data'],
        });
      })
      .catch(console.log);
  }

  render() {
    if (!this.state.member) {
      return null;
    }

    const { post, discussionTitle, navigation } = this.props;
    const { number, contentHtml, createdAt } = post.attributes;
    const memberId = post.relationships.user.data.id;
    const isFirstPost = number === 1;

    const { attributes } = this.state.member;
    const { displayName, avatarUrl } = attributes;

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-GB')
    // const createdAtAgo = timeAgo.format(new Date(createdAt));
    const editedAtAgo = timeAgo.format(new Date(createdAt));

    return (
      <View style={isFirstPost ? styles.firstPost : styles.post}>

        <View style={styles.iconContainer}>
          <Image
            style={styles.memberIcon}
            source={{
              uri: avatarUrl
            }}
          />
        </View>

        <View style={styles.postText}>

          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile', { memberId: memberId })}>
              <Text style={styles.username}>
                {displayName}
              </Text>
            </TouchableWithoutFeedback>
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