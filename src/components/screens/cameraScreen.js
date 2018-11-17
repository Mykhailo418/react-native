import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CameraComponent from '../common/cameraComponent';
import {View, StyleSheet} from 'react-native';
import {observer, inject} from 'mobx-react';

@inject('people')
@observer
class CameraScreen extends Component {
    static propTypes = {

     }

     static navigationOptions = {
        title: 'Camera'
     }

     render() {
        console.log('-- Camera Screen');
        return (
          <View style={styles.container}>
            <CameraComponent setupPhoto={this.setupPersonPhoto} />
          </View>
        );
    }

    setupPersonPhoto = (asset) => {
        const {uid} = this.props.navigation.state.params;
        const {people} = this.props;
         people.setPhoto(uid, asset.uri);
        //console.log('-- people list', people.list);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});

 export default CameraScreen;
