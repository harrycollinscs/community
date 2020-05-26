import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Component } from 'react';

import { ActivityIndicator, Text, ListView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import TagsListItem from './TagsListItem';

export default class TagsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      dummy: [
        "All discussions", "Announcements", "Service Updates", "Help and support", "Contribute", "General discussion", "Tips and guides", "Welcome and join"],
    }
  }

  componentDidMount() {
    this.getTags();
  }

  getTags() {

    this.setState({ isRefreshing: false });

    fetch("https://community.giffgaff.com/api/tags")
      .then(
        (res) => res.json()
      )
      .then((data) => {
        this.setState({
          tags: data['data'],
        });
        this.setState({ isRefreshing: false });
      })
      .catch(console.log);
  }

  render() {
    const { navigation } = this.props;
    const tags = this.state.tags;

    if (tags.length === 0) {
      return <ActivityIndicator />
    }

    const dataKeys = tags.map((tag) => {
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