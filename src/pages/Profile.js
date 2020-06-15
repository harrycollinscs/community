import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import MemberProfileBanner from '../components/MemberProfileBanner';
import ProfileTabs from '../components/ProfileTabs';

export default class Profile extends Component {
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
    const memberId = this.props.route.params ? this.props.route.params.memberId : 12113206;
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
      return <ActivityIndicator />
    }

    const memberId = this.props.route.params ? this.props.route.params.memberId : 12113206;
    const { attributes } = this.state.member;

    return (
      <>
        <MemberProfileBanner 
          attributes={attributes}
        />
        <ProfileTabs
          memberId={memberId}
        />
      </>
    )
  }
}
