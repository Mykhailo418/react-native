import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View, SectionList, Button, Image} from 'react-native';
import {observer, inject} from 'mobx-react';

@inject('navigation')
@observer
class PersonCard extends Component{
    static propTypes = {
      person: PropTypes.object.isRequired
    }

    render(){
        const {uid, email, fname, lname, photo} = this.props.person;
        console.log('photo', photo);
        let image = (photo) ? <Image source={{ uri: photo }} style = {{ width: 200, height: 200}} /> : null;
        return(
          <View key={uid} style={{marginBottom: 10}}>
            {image}
            <Text style={{fontWeight: 'bold'}}>{`${fname} ${lname}`}</Text>
            <Text>Email: {email}</Text>
            <Button title="Take a Picture" onPress={this.openCamera(uid)} />
          </View>
        );
    }

    openCamera = (uid) => {
      const {navigation} = this.props;
      return () => navigation.goTo('camera', {uid});
    }
}

export default PersonCard;
