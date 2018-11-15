import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View, SectionList, Button} from 'react-native';
import {observer} from 'mobx-react';

@observer
class PersonCard extends Component{
    static propTypes = {
      person: PropTypes.object.isRequired
    }

    render(){
        
        const {uid, email, fname, lname} = this.props.person;
        return(
          <View key={uid} style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}}>{`${fname} ${lname}`}</Text>
            <Text>Email: {email}</Text>

          </View>
        );
    }
}

export default PersonCard;
