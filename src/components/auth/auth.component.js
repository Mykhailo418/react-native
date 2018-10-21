import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, Button, Platform, StyleSheet} from 'react-native';
import {observer, inject} from 'mobx-react';
import firebase from 'firebase';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  input: {
    ...Platform.select({
        ios: {
          borderBottomWidth: 1,
          borderBottomColor: '#000'
        },
        android: {
        }
    })
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  errorText: {
    color: 'red'
  }
});

@inject('auth')
@observer
class AuthComponent extends Component{
    static propTypes = {
      title: PropTypes.string.isRequired,
      onSignIn: PropTypes.func.isRequired
    }

    render(){
      const {title, onSignIn, auth} = this.props;
      return(
        <View>
          <View style={styles.container}>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
              <View>
                <Text>Email:</Text>
                <TextInput
                    value={auth.email}
                    onChangeText={auth.changeEmail}
                    keyboardType="email-address"
                    style={styles.input}
                />
                <Text style={styles.errorText}>
                  {auth.isValidEmail || auth.email.length < 1 ? '' : 'email is invalid'}
                </Text>
              </View>
              <View>
                <Text>Password:</Text>
                <TextInput
                    value={auth.password}
                    onChangeText={auth.changePassword}
                    secureTextEntry
                    style={styles.input}
                />
              </View>
              <Button title = "Sign In" onPress = {this.handleSubmit}/>
          </View>
          </View>
      );
    }

    handleFieldChange = (type) => (value) => {
        this.setState({
          [type]: value
        });
    }

    handleSubmit = () => {
      const {auth} = this.props;
      if(auth.isValidEmail){
        firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
            .then((user) => {
                auth.user = user;
                //this.props.onSignIn();
        });
      }
    }
}

export default AuthComponent;
