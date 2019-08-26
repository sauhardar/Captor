import React, { Component } from 'react';
import {
  Main,
  Example,
  Welcome,
  Signup,
  AddPost,
  AllPosts,
  Login,
  Settings,
  UserProfile
} from './src/components/screens';
import { Drawer } from './src/components/views';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MainBottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: Main,
    AddPost: AddPost,
    AllPosts: AllPosts
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `map-marked${focused ? '-alt' : ''}`;
        } else if (routeName === 'AddPost') {
          iconName = `plus-square`;
        } else if (routeName === 'AllPosts') {
          iconName = `file-alt`;
        }

        return (
          <FontAwesome5
            name={iconName}
            size={25}
            color={tintColor}
            {...(focused ? '' : 'regular')}
          />
        );
      }
    }),
    activeColor: 'white',
    inactiveColor: '#004485',
    barStyle: { backgroundColor: '#011730' }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: MainBottomNavigator,
    Settings: Settings,
    UserProfile: UserProfile
  },
  { contentComponent: Drawer }
);

const AuthNavigator = createStackNavigator({
  // The login/signup page
  Welcome: Welcome,
  Login: Login,
  // sign up for an account
  Signup: Signup
});

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    // Home page w/ map, add post, view all posts, etc.
    Home: {
      screen: AppDrawerNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    // Figure out a way to avoid welcome page if account already exists
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
