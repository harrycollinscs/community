import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';

import { View, SectionList } from 'react-native';

import { ActivityIndicator, Text, RefreshControl, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import SearchResultsUserListItem from './SearchResultsUserListItem';
import SearchResultsDiscussionListItem from './SearchResultsDiscussionListItem';

export default class SearchResultsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      searchValue: "",
      users: [],
      discussions: [],
    }
  }

  getSearchResultsUsers() {

    const { searchValue } = this.props;
    const url = `https://community.giffgaff.com/api/users?filter%5Bq%5D=${searchValue}&page%5Blimit%5D=5`;

    this.setState({ isLoading: true });

    fetch(url)
      .then(
        (res) => res.json()
      )
      .then((data) => {

        this.setState({
          isLoading: false,
          users: data['data'],
        });
      })
      .catch(console.log);
  }

  getSearchResultsDiscussions() {
    const { searchValue } = this.props;

    const url = `https://community.giffgaff.com/api/discussions?filter%5Bq%5D=${searchValue}&page%5Blimit%5D=5&include=mostRelevantPost`;

    this.setState({ isLoading: true });

    fetch(url)
      .then(
        (res) => res.json()
      )
      .then((data) => {

        this.setState({
          isLoading: false,
          discussions: data['data'],
        });
      })
      .catch(console.log);
  }

  onType(props) {
    if (props.searchValue !== this.state.searchValue) {
      this.setState({
        searchValue: props.searchValue
      });

      if (props.searchValue.length > 3) {
        this.getSearchResultsUsers();
        this.getSearchResultsDiscussions();
      }

    };
  }

  render() {

    const props = this.props;
    this.onType(props);

    const { users, discussions } = this.state;

    if (users.length === 0 || discussions.length === 0) {
      return <View />
    }

    const sections = [
      {
        title: 'Users',
        data: this.state.users,
      },
      {
        title: 'Discussions',
        data: this.state.discussions,
      }
    ];

    return (
      <SectionList
        sections={sections}
        renderItem={({ item, section }) => {
          let component;

          switch (section.title) {
            case 'Users':
              component = <SearchResultsUserListItem user={item} navigation={this.props.navigation}/>;
              break;
            case 'Discussions':
              component = <SearchResultsDiscussionListItem discussion={item} navigation={this.props.navigation}/>;
              break;
            default:
              component = <View></View>
              break;
          }
          return ( component )
      }}
        renderSectionHeader={({ section }) => (
          <Text style={{'padding':10, 'fontWeight': 'bold'}}>{section.title}</Text>
        )}
      />
    )

  }
}


