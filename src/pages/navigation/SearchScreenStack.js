import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Search';


const SearchStack = createStackNavigator();

function SearchScreenStack() {
  return (
    <SearchStack.Navigator >
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={ screenOptions('Search') }
        
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
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Gill Sans'
    }
  })
}

export default SearchScreenStack;