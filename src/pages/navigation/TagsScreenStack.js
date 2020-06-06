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
        options={screenOptions('Profile')}
      />
      <TagsStack.Screen
        name="Discussion List"
        component={DiscussionListPage}
        options={screenOptions('Discussions')}
      />
      <TagsStack.Screen
        name="Discussion"
        component={Discussion}
        options={screenOptions('Discussion')}
      />
    </TagsStack.Navigator>
  );
}

const screenOptions = (title = '') => {
  return ({
    title: title,
    headerStyle: {
      backgroundColor: '#eb5f8e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Gill Sans'
    }
  })
}

export default TagsScreenStack;