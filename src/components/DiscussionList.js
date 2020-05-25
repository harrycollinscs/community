import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Component } from 'react';

import { ActivityIndicator, Text, ListView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DiscussionListItem from './DiscussionListItem';

export default class TagsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      discussions: [],
    }

    // this.getDiscussionsFromApi();
  }

  componentDidMount() {
    fetch("https://community.giffgaff.com/api/discussions")
      .then(
        (res) => res.json()
      )
      .then((data) => {
        console.log(data)
        this.setState({
          discussions: data['data'],
        });
      })
      .catch(console.log);
  }

  //   async getDiscussionsFromApi() {
  //   try {
  //     let response = await fetch(
  //       'https://community.giffgaff.com/api/discussions',
  //     );
  //     let responseJson = await response.json();
  //     console.log(responseJson);
  //     return responseJson;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    if (this.state.discussions.length === 0) {
      return <ActivityIndicator />
    }

    const discussions = this.state.discussions;

    const dataKeys = discussions.map((discussions) => {
      return (
        {key: discussions['attributes']}
      )
    })

    return (
        <FlatList
          data={dataKeys}
          renderItem={
            ({item}) => 
              <DiscussionListItem 
              attributes={item.key}
              />
          }
        />

    )

    return(<Text>Hi</Text>)
  }
}