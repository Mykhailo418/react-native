import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, Button, Platform, StyleSheet} from 'react-native';

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
  }
});

class AuthComponent extends Component{
    static propTypes = {
      title: PropTypes.string.isRequired,
      onSignIn: PropTypes.func.isRequired
    }

    state = {
      email: '',
      password: ''
    }

    render(){
      const {title, onSignIn} = this.props;
      return(
        <View>
          <View style={styles.container}>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
              <View>
                <Text>Email:</Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={this.handleFieldChange('email')}
                    keyboardType="email-address"
                    style={styles.input}
                />
              </View>
              <View>
                <Text>Password:</Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={this.handleFieldChange('password')}
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
      this.props.onSignIn();
    }
}

export default AuthComponent;
