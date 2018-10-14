import React, { Component, PureComponent  } from 'react';
import {Modal, Text, Button, View, StyleSheet} from 'react-native';

class ConfirmModal extends PureComponent {
  render(){
    const {visible, children, onConfirm, onCancel} = this.props;
    return (
      <Modal visible={visible} animationType="slide" transparent={false} onRequestClose={onCancel} >
        <View style={styles.container}>
          <View style={styles.content}>
              <Text>{children}</Text>
              <View style={styles.buttons}>
                  <Button title="ok" onPress={onConfirm} />
                  <Button title="cancel" onPress={onCancel} />
              </View>
            </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        maxWidth: '80%',
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 5
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default ConfirmModal;
