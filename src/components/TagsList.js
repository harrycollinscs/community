import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Text, ListView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TagsListItem from './TagsListItem';

import { getTags } from '../store/actions';

class TagsList extends Component {

  componentDidMount() {
    this.props.getTags();
  }

  render() {
    const { navigation, tags } = this.props;

    if (tags.length === 0) {
      return <ActivityIndicator />
    }

    const dataKeys = tags
    .filter(tag => tag['type'] === 'tags' && !tag.attributes['isChild'])
    .map((tag) => {
      return (
        {
          key: tag['id'],
          tag: tag,
        }
      )
    })

    return (
      <FlatList
        data={dataKeys}
        renderItem={
          ({ item }) =>
            <TagsListItem
              key={item.key}
              tag={item.tag}
              navigation={navigation}
            />
        }
      />

    )

  }
}

const mapStateToProps = store => ({
    tags: store.tags.tags,
    isLoading: store.tags.isLoading,
});

export default connect(mapStateToProps, { getTags })(TagsList);