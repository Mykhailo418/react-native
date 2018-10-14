import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image, Button } from 'react-native';
import ConfirmModal from '../common/confirmModal';

const styles = StyleSheet.create({
    image: {
       width: 200,
       height: 100
    },
    eventTitle: {
        fontWeight: "700",
    },
    deleteBtnText: {
      color: 'red',
      width: '100%',
      textAlign: 'center',
    }
});

class EventCard extends Component{
    static propTypes = {
        event: PropTypes.object.isRequired
    }

    state = {
      modalVisible: false
    }

    render(){
      const {title, when, url} = this.props.event;
      return(
        <View>
          <View>
            <Image source={{ uri: 'https://picsum.photos/400/200/?random'}}
                style = {styles.image}
            />
            <Text style = {styles.eventTitle}>{title}</Text>
            <Text>{when}</Text>
            <Text>{url}</Text>
            <Button title="Delete Event" style={styles.buttonDelete} onPress={this.deleteEvent} />
          </View>
          <ConfirmModal visible={this.state.modalVisible} onConfirm={this.onConfirm} onCancel={this.onCancel} >
            <Text>Do you want to delete event {title} ?</Text>
          </ConfirmModal>
        </View>
      );
    }

    onConfirm = () => {
      console.log('delete');
      this.setState({modalVisible: false});
    }

    onCancel = () => {
      console.log('cancel');
      this.setState({modalVisible: false});
    }

    deleteEvent = () => {
      this.setState({modalVisible: true});
    }
}

export default EventCard;
