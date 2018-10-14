import {createStackNavigator} from 'react-navigation';
import AuthScreen from './authScreen'
import EventScreen from './eventScreen'
import EventListScreen from './eventListScreen'

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
    eventList: {
        screen: EventListScreen
    }
})