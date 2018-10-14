import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventCard from '../events/eventCard';
import {View, StyleSheet} from 'react-native';

class EventScreen extends Component {
    static propTypes = {
      event: PropTypes.object.isRequired
     }

     static navigationOptions = {
        title: 'Event'
     }

     render() {
        return (
          <View style={styles.container}>
            <EventCard event={event} />
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

 export default EventScreen;
