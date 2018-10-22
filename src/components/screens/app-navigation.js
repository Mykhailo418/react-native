import {createStackNavigator, TabNavigator } from 'react-navigation';
import AuthScreen from './authScreen'
import EventScreen from './eventScreen'
import EventListScreen from './eventListScreen'
import PeopleListScreen from './peopleListScreen'

const customTabNavigator = TabNavigator({
  eventList: {
    screen: EventListScreen,
    navigationOptions: ({ navigation }) => ({
         title: 'Event List',
    }),
  },
  peopleList: {
    screen: PeopleListScreen,
    navigationOptions: ({ navigation }) => ({
         title: 'People List'
    }),
  },
});

export default createStackNavigator({
    auth: {
        screen: AuthScreen,
        navigationOptions: {
            title: 'Sign In'
        }
    },
    event: {
        screen: EventScreen
    },
    listing: {
        screen: customTabNavigator,
        navigationOptions: ({ navigation }) => ({
             title: 'Listing',
        }),
    },
    peopleList: {
      screen: PeopleListScreen
    }
});
