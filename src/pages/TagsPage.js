import React, { Component } from 'react';

import TagsList from '../components/TagsList';
import TagsHeader from '../components/WelcomeBannerPink';


export default class TagsPage extends Component {

  render() {

    const { navigation } = this.props;

    return (
      <>
        {/* <TagsHeader /> */}
        <TagsList navigation={navigation} />
      </>
    )
  }
}