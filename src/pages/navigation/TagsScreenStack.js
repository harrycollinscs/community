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
        options={screenOptions('Discussions', 'Discussion')}
      />
      <TagsStack.Screen
        name="Discussion"
        component={Discussion}
        options={screenOptions('Discussion', 'Discussion')}
      />
    </TagsStack.Navigator>
  );
}

const screenOptions = (title = '', pageType = '') => {
  const headerColor = pageType === 'Discussion' ? '#35ADCE' : '#eb5f8e';

  return ({
    title: title,
    headerStyle: {
      backgroundColor: headerColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Gill Sans'
    }
  })
}

export default TagsScreenStack;