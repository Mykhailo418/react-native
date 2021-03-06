import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    image: {
       width: 200,
       height: 100
    },
    eventTitle: {
        fontWeight: "700",
    },
    containerTitle: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: "row"
    },
    deleteBtnText: {
      color: 'red'
    }
});

class Event extends Component{
    static propTypes = {
        event: PropTypes.object.isRequired
    }

    render(){
      const {title, when, url} = this.props.event;
      return (
        <View>
            <View style={styles.containerTitle}>
                <Text style={styles.eventTitle}>{title}</Text>
            </View>
            <Text>{url}</Text>
            <Text>{when}</Text>
        </View>
      );
    }

    deleteEvent = () => {
      const {title} = this.props.event;
      Alert.alert(
          'Delete Event',
          `Do you want to delete event ${title} ?`,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Deleting'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('Event Deleted')},
          ],
          { cancelable: true }
        )
    }
}

export default Event;
