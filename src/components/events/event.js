import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image} from 'react-native';

const styles = StyleSheet.create({
    image: {
       width: 200,
       height: 100
    }
});

class Event extends Component{
    static propTypes = {
        event: PropTypes.object.isRequired
    }

    render(){
      const {title, when, url} = this.props.event;
      return(
        <View>
          <Image source={{ uri: 'https://picsum.photos/400/200/?random'}}
              style = {styles.image}
          />
          <Text>{title}</Text>
          <Text>{when}</Text>
          <Text>{url}</Text>
        </View>
      );
    }
}

export default Event;
