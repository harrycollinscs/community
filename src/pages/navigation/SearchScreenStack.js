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
        options={screenOptions('Search', 'Search')}

      />
      <SearchStack.Screen
        name="Profile"
        component={Profile}
        options={(props) => {
          return (
            screenOptions(props.route.params.memberName, 'Profile')
          )
        }}
      />
      <SearchStack.Screen
        name="Discussion"
        component={Discussion}
        options={(props) => {
          const title = props.route.params.memberName + "'s post";
          return (
            screenOptions(title, 'Discussion')
          )
        }}
      />
    </SearchStack.Navigator>
  );
}

const screenOptions = (title = '', pageType =  '') => {
  let headerColor;

  switch (pageType) {
    case 'Discussion':
      headerColor = '#35ADCE';
      break;
    case 'Profile':
      headerColor = '#ea5b25';
      break;
    default:
      headerColor = '#FCC31E';
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

export default SearchScreenStack;