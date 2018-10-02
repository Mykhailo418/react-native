import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthComponent from './auth.component';
import {View} from 'react-native';

class Auth extends Component{
    static propTypes = {

    }

    render(){
      return(
        <View>
          <AuthComponent title="Sign In For Ios" {...this.props} />
        </View>
      );
    }
}

export default Auth;
