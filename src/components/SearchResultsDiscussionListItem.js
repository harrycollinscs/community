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

export default class SearchResultsDiscussionListItem extends Component {

  render() {
    const { discussion, navigation } = this.props;
    const { title } = discussion.attributes;
    const authorIdTemp = discussion.attributes.startUserId;

    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('Discussion', { discussionId: discussion.id, discussionTitle: title, memberName: authorIdTemp })}
      >
        <View style={styles.discussion}>
          <Text>
            {title}
          </Text>
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
    padding: 15,
  },
})