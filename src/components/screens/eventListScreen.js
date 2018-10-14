import React, { Component } from 'react';
import PropTypes from 'prop-types';
import groupedEvents from '../decorators/GroupedEvents';
import SectionsList from '../events/sectionsList';
import data from '../../../fixtures';
import {View, StyleSheet} from 'react-native';

const eventList = Object.entries(data.events).map(([ id, event ]) => ({ id, ...event }));

class EventListScreen extends Component {
    static propTypes = {
     }

     static navigationOptions = {
        title: 'Event list'
    }

     render() {
        const GroupedEvents = groupedEvents(SectionsList, eventList);
        return (
          <View style={styles.container}>
            <GroupedEvents />
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

 export default EventListScreen;
