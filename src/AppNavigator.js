import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import Profile from './pages/Profile';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
});

export default AppNavigator;