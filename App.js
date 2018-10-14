import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/components/auth/auth';
import Event from './src/components/events/event';
import EventCard from './src/components/events/eventCard';
import EventsList from './src/components/events/eventsList';
import SectionsList from './src/components/events/sectionsList';
import groupedEvents from './src/components/decorators/GroupedEvents';
import AppNavigator from './src/components/screens/app-navigation'
import data from './fixtures';

// Utils
const eventList = Object.entries(data.events).map(([ id, event ]) => ({ id, ...event }));

export default class App extends React.Component {
  render() {
    // <Auth />
    // <Event event={eventList[0]} />
    const GroupedEvents = groupedEvents(SectionsList, eventList);
    return (
        <AppNavigator />
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
