import React, { Component } from 'react';

import TagsList from '../components/TagsList';
import TagsHeader from '../components/WelcomeBannerPink';
import DiscussionList from '../components/DiscussionList';

import { Container, Header, Icon, Fab } from 'native-base';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
  faPen,
} from '@fortawesome/free-solid-svg-icons';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }
  }

  render() {

    const { navigation } = this.props;

    return (
      <>
        {/* <TagsHeader /> */}
        <DiscussionList
          navigation={navigation}
          tagSlug=""
        />
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#35ADCE' }}
          position="bottomRight"
          useNativeDriver={false}
          onPress={() => {
            this.setState({ active: !this.state.active });
            navigation.navigate('Composer')
          }}>
          <FontAwesomeIcon icon={faPen} />
        </Fab>
      </>
    )
  }
}