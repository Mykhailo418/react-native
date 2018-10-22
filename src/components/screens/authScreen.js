import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from '../auth/auth';
import {View, StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

class AuthScreen extends Component {
    static propTypes = {
     }

     static navigationOptions = {
        title: 'Sign In'
    }

     render() {
        return (
          <View style={styles.container}>
            <Auth onSignIn = {this.handleSignIn}/>
          </View>
        );
    }
     handleSignIn = () => {
      const action = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'listing'})]
      });
       this.props.navigation.dispatch(action);
       //this.props.navigation.navigate('eventList');
     }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

 export default AuthScreen;
