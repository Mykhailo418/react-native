import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity} from 'react-native';
import Event from './event';
import {observer, inject} from 'mobx-react';

const styles = StyleSheet.create({
  event: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  }
});

@inject('navigation')
@observer
class EventsList extends Component{
    static propTypes = {
      events: PropTypes.array.isRequired
    }

    render(){
      console.log('EventsList render');
      return(
        <View>
        <ScrollView>
          {this.outputEvents()}
        </ScrollView>
        </View>
      );
    }

    outputEvents = () => {
      const {events, navigation} = this.props;
      return events.map((event) => {
        return(
            <View key = {event.uid} style={styles.event}>
              <TouchableOpacity onPress={this.navigateToEvent(event)} >
                <Event event={event} />
              </TouchableOpacity>
            </View>
         );
      });
    }

    navigateToEvent = (event) => {
        const {navigation} = this.props;
        return () => navigation.goTo('event', {event});
    }
}

export default EventsList;
