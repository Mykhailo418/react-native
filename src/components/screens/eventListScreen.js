import React, { Component } from 'react';
import PropTypes from 'prop-types';
import groupedEvents from '../decorators/GroupedEvents';
import SectionsList from '../events/sectionsList';
//import data from '../../../fixtures';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {observer, inject} from 'mobx-react';

//const eventList = Object.entries(data.events).map(([ id, event ]) => ({ id, ...event }));

@inject('events')
@inject('navigation')
@observer
class EventListScreen extends Component {
    static propTypes = {
     }

     static navigationOptions = {
        title: 'Event list'
    }

    componentDidMount() {
        this.props.events.loadAll();
    }

     render() {
        const {events} = this.props;
        if (events.loading) return this.getLoader();
        const GroupedEvents = groupedEvents(SectionsList, events.list);
        return (
          <View style={styles.container}>
            <GroupedEvents />
          </View>
        );
    }

    getLoader() {
       return <View><ActivityIndicator size='large'/></View>;
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
