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
        name="Home"
        component={Home}
        options={{
          title: 'Community',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Gill Sans'
          },
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontFamily: 'Gill Sans'
          },
        }}
      />
      <HomeStack.Screen
        name="Discussion List"
        component={DiscussionListPage}
        options={{
          title: 'Discussions',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Gill Sans'
          },
        }}
      />
        <HomeStack.Screen
          name="Discussion"
          component={Discussion}
          options={{
            title: 'Discussion',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Gill Sans'
            },
          }}
        />
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;