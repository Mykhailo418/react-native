import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View} from 'react-native';

const styles = StyleSheet.create({
  event: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  eventTitle: {
    fontWeight: "700"
  }
});

class EventsList extends Component{
    static propTypes = {
      events: PropTypes.array.isRequired
    }

    render(){
      return(
        <ScrollView>
          {this.outputEvents()}
        </ScrollView>
      );
    }

    outputEvents = () => {
      const {events} = this.props;
      return events.map((event) => {
        return(
            <View key = {event.id} style={styles.event}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text>{event.url}</Text>
                <Text>{event.when}</Text>
            </View>
         )
      });
    }
}

export default EventsList;
