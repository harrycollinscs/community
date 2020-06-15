import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Search';
import Profile from '../Profile';
import Discussion from '../Discussion';

const SearchStack = createStackNavigator();

function SearchScreenStack() {
  return (
    <SearchStack.Navigator >
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={screenOptions('Search')}

      />
      <SearchStack.Screen
        name="Profile"
        component={Profile}
        options={(props) => {
          return (
            screenOptions(props.route.params.memberName)
          )
        }}
      />
      <SearchStack.Screen
        name="Discussion"
        component={Discussion}
        options={(props) => {
          const title = props.route.params.memberName + "'s post";
          return (
            screenOptions(title)
          )
        }}
      />
    </SearchStack.Navigator>
  );
}

const screenOptions = (title = '') => {
  return ({
    title: title,
    headerStyle: {
      backgroundColor: '#FCC31E',
    },
    headerBackTitleVisible: false,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Gill Sans'
    }
  })
}

export default SearchScreenStack;