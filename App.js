import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/components/auth/auth';
import Event from './src/components/events/event';
import EventsList from './src/components/events/eventsList';
import data from './fixtures';

// Utils
const eventList = Object.entries(data.events).map(([ id, event ]) => ({ id, ...event }));

export default class App extends React.Component {
  render() {
    // <Auth />
    // <Event event={eventList[0]} />
    return (
      <View style={styles.container}>
        <EventsList events={eventList} />
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
  },
});
