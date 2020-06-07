import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TagsPage from '../TagsPage';
import Profile from '../Profile';
import DiscussionListPage from '../DiscussionListPage';
import Discussion from '../Discussion';


const TagsStack = createStackNavigator();

function TagsScreenStack() {
  return (
    <TagsStack.Navigator>
      <TagsStack.Screen
        name="Tags"
        component={TagsPage}
        options={screenOptions('Tags')}
      />
      <TagsStack.Screen
        name="Profile"
        component={Profile}
        options={(props) => {
          return (
            screenOptions(props.route.params.memberName, 'Profile')
          )
        }}
      />

      <TagsStack.Screen
        name="Discussion List"
        component={DiscussionListPage}
        options={(props) => {
          return (
            screenOptions(props.route.params.title, 'Discussion')
          )
        }}
      />

      <TagsStack.Screen
        name="Discussion"
        component={Discussion}
        options={(props) => {
          const title = props.route.params.memberName + "'s post";
          return (
            screenOptions(title, 'Discussion')
          )
        }}
      />
    </TagsStack.Navigator>
  );
}

const screenOptions = (title = '', pageType = '') => {
  let headerColor;

  switch (pageType) {
    case 'Discussion':
      headerColor = '#35ADCE';
      break;
    case 'Profile':
      headerColor = '#ea5b25';
      break;
    default:
      headerColor = '#eb5f8e';
  }

  return ({
    title: title,
    headerStyle: {
      backgroundColor: headerColor,
    },
    headerBackTitleVisible: false,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Gill Sans'
    }
  })
}

export default TagsScreenStack;