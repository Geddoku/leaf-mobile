import React, { useState } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

export default function WatchButton(props) {
  const [modalOpen, setModal] = useState(0);
  return (
    <View style={style.btnCourse}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalOpen}
                onRequestClose={() => {
                    setModal(!modalOpen)
                }}>
                <Text>{props.title}</Text>
            </Modal>
            <TouchableNativeFeedback onPress={() => {
                setModal(!modalOpen)
            }}>
                <View>
                    <Text>Watch</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
  );
}

const style = StyleSheet.create({
  btnCourse: {
    marginTop: 15,
    width: 100,
    height: 40,
    backgroundColor: '#ededed',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
