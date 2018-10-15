import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventCard from '../events/eventCard';
import {View, StyleSheet} from 'react-native';
import data from '../../../fixtures'

class EventScreen extends Component {
    static propTypes = {

     }

     static navigationOptions = ({ navigation }) => ({
        title: 'Event ' + navigation.state.params.title
     })

     render() {
       console.log('-- Event Screen');
       const event = data.events[this.props.navigation.state.params.id];
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
