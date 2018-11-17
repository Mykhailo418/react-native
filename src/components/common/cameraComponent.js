import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Camera, Permissions, FileSystem, MediaLibrary } from 'expo';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';

@observer
class CameraComponent extends Component{
    static propTypes = {

    }

    @observable typeCamera = Camera.Constants.Type.back;
    @observable hasCameraPermission = null;
    @observable hasCameraRollPermission = null;
    @observable camera = null;

    async componentDidMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      const { statusCameraRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL );
      FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
        console.log(e, 'Directory exists');
      });
      this.setPermission(status === 'granted', 'hasCameraPermission');
      this.setPermission(statusCameraRoll === 'granted', 'hasCameraRollPermission');
    }

    render(){
      console.log(this.hasCameraRollPermission, this.hasCameraPermission);
      if (this.hasCameraPermission === null || this.hasCameraRollPermission === null) {
        return <View />;
      } else if (this.hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      }
      return (
        <View style={styles.container}>
          <Camera style={styles.camera} type={this.typeCamera} ref={ref => { this.camera = ref; }} >
            <View style={styles.innerView}>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={this.flipCamera}
              >
                <Text style={styles.flipText}>{' '}Flip{' '}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={this.takePicture}
              >
                <Text style={styles.flipText}>{' '}Photo{' '}</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }

    flipCamera = () => {
      this.typeCamera = (this.typeCamera === Camera.Constants.Type.back)
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back;
    }

    takePicture = async () => {
      if (this.camera) {
        // await this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
        const { uri } = await this.camera.takePictureAsync();
        const asset = await MediaLibrary.createAssetAsync(uri);
        this.props.setupPhoto(asset);
      }
    }

    onPictureSaved = async photo => {
      const path = `${FileSystem.documentDirectory}photos/${Date.now()}_myAppPicture.jpg`;
      await FileSystem.copyAsync({
        from: photo.uri,
        to: path,
      });
      Alert.alert(
        'Photo',
        'Photo was created',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      console.log(path);
    }

    // Actions
    @action setPermission = (isGranted, permission) => {
      this[permission] = isGranted;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
      flex:1,
    },
    innerView: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'flex-end',
    },
    touchableOpacity: {

    },
    flipText: {
      fontSize: 18,
      marginBottom: 10,
      color: 'white'
    }
})

export default CameraComponent;
