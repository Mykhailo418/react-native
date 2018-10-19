import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventCard from '../events/eventCard';
import {View, StyleSheet} from 'react-native';
import data from '../../../fixtures'

class EventScreen extends Component {
    static propTypes = {

     }

     static navigationOptions = ({ navigation }) => ({
        title: 'Event ' + navigation.state.params.event.title
     })

     render() {
       console.log('-- Event Screen');
       const {event} = this.props.navigation.state.params;
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
