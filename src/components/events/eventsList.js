import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity} from 'react-native';
import Event from './event';

const styles = StyleSheet.create({
  event: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  }
});

class EventsList extends Component{
    static propTypes = {
      events: PropTypes.array.isRequired,
      onEventPress: PropTypes.func.isRequired,
    }

    render(){
      return(
        <View>
        <ScrollView>
          {this.outputEvents()}
        </ScrollView>
        </View>
      );
    }

    outputEvents = () => {
      const {events} = this.props;
      return events.map((event) => {
        return(
            <View key = {event.id} style={styles.event}>
              <TouchableOpacity onPress={this.navigateToEvent(event)} >
                <Event event={event} />
              </TouchableOpacity>
            </View>
         );
      });
    }

    navigateToEvent = (event) => {
        const {onEventPress} = this.props;
        return () => onEventPress(event);
    }
}

export default EventsList;
