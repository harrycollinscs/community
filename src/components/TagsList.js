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
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://community.giffgaff.com/api/tags";
    fetch(proxyurl + url)
    // .then(
    //   res => res.json()
    // )
      
      .then((data) => {
        this.setState({
          tags: data,
        });
      })
      .catch(console.log);
  }
  
  render() {
    const { navigation } = this.props;

    if (this.state.tags.length === 0 ) {
      return <ActivityIndicator/>
    }

    const dummy = this.state.dummy;

    const dataKeys = dummy.map((dummy) => {
      return (
        {key: dummy}
      )
    })

    return (
        <FlatList
          data={dataKeys}
          renderItem={
            ({item}) => 
              <TagsListItem 
              item={item.key}
              navigation={navigation}
              />
          }
        />

    )


  }
}