import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View, Button} from 'react-native';
import EventsList from './eventsList';
import {observer, inject} from 'mobx-react';

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 4
  },
  event: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  eventTitle: {
    fontWeight: "700"
  },
  groupedTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderBottomColor: '#47315a',
    borderBottomWidth: 1,
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20
  }
});

@inject('navigation')
@observer
class SectionsList extends Component{
    static propTypes = {
      groupedEvents: PropTypes.object.isRequired
    }

    render(){
      return(
        <View>
        <Text style={styles.header}>Events</Text>
        <Button title="People List" onPress={this.goToPeopleScreen} />
        <ScrollView>
          {this.outputEvents()}
        </ScrollView>
        </View>
      );
    }

    outputEvents = () => {
      const {groupedEvents, onEventPress} = this.props;
      const keysEvents = Object.keys(groupedEvents);

      return keysEvents.map((key) => {
        return (
          <View key = {key.charCodeAt()} >
              <Text style={styles.groupedTitle}>{`${key.toUpperCase()}(${groupedEvents[key].length})`}</Text>
              <EventsList events={groupedEvents[key]} onEventPress={onEventPress}></EventsList>
          </View>
        );
      })
    }

    goToPeopleScreen = () =>{
      return this.props.navigation.goTo('peopleList', {});
    }
}

export default SectionsList;
