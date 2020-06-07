import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Profile from '../Profile';
import DiscussionListPage from '../DiscussionListPage';
import Discussion from '../Discussion';


const HomeStack = createStackNavigator();

function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="All discussions"
        component={Home}
        options={screenOptions('Home')}
      />
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={screenOptions('Profile')}
      />
      <HomeStack.Screen
        name="Discussion List"
        component={DiscussionListPage}
        options={screenOptions('Discussions')}
      />
      <HomeStack.Screen
        name="Discussion"
        component={Discussion}
        options={screenOptions('Discussion')}
      />
    </HomeStack.Navigator>
  );
}

const screenOptions = (title = '') => {
  return ({
    title: title,
    headerStyle: {
      backgroundColor: '#35ADCE',
      // backgroundColor: '#fff'
    },
    headerTintColor: '#fff',
    // headerTintColor: '#000',
    headerTitleStyle: {
      // fontWeight: 'bold',
      fontFamily: 'Gill Sans'
    }
  })
}

export default HomeScreenStack;