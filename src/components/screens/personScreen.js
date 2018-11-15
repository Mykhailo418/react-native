import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../people/personCard';
import {View, StyleSheet} from 'react-native';

class PersonScreen extends Component {
    static propTypes = {

     }

     static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.person.fname} ${navigation.state.params.person.lname}`
     })

     render() {
       console.log('-- Person Screen');
       const {person} = this.props.navigation.state.params;
        return (
          <View style={styles.container}>
            <PersonCard person={person} />
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

 export default PersonScreen;
