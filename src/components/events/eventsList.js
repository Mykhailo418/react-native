import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
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
      events: PropTypes.array.isRequired
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
                <Event event={event} />
            </View>
         )
      });
    }
}

export default EventsList;
