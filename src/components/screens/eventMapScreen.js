import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventMap from '../events/eventMap';
import {View, StyleSheet} from 'react-native';

class EventMapScreen extends Component {
    static propTypes = {

     }

     render() {
       console.log('-- Event Map Screen');
        return (
          <View >
            <EventMap />
          </View>
        );
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

 export default EventMapScreen;
