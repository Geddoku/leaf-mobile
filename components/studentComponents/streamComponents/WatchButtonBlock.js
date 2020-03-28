import React, { useState } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';

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
                <View style={style.container}>
                  <View style={style.titleContainer}>
                    <Text style={style.title}>{props.title}</Text>
                  </View>
                </View>
                <WebView
                  originWhitelist={['*']}
                  source={{ html: `<iframe width="100%" height="520" src="${props.streamURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>` }}
                  style={{ height: 520, width: '100%', backgroundColor: 'black' }}/>
                <View style={style.aboutAuthor}>
                  <Text style={style.aboutText}>{props.author}</Text>
                  <Text style={style.aboutSubject}>{props.subject}</Text>
                </View>
                <View style={{height: '50%'}}>
                  <Text style={style.titleChat}>Chat here</Text>
                </View>
            </Modal>
            <TouchableNativeFeedback onPress={() => {
                setModal(!modalOpen)
            }}>
                <View>
                    <Text style={style.watch}>Watch</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
  );
}

const style = StyleSheet.create({
  btnCourse: {
    width: 80,
    height: 40,
    backgroundColor: '#ff1e56',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  watch: {
    color: 'white'
  },
  container: {
    backgroundColor: 'black'
  },
  title: {
    color: 'white',
    padding: 30,
    fontWeight: 'bold',
    fontSize: 18
  },
  aboutAuthor: {
    backgroundColor: 'black',
    padding: 10
  },
  aboutSubject: {
    color: '#ff1e56'
  },
  aboutText: {
    color: 'white',
    fontSize: 16
  },
  titleChat: {
    alignSelf: 'center',
    padding: 50,
    fontWeight: 'bold',
    fontSize: 18
  }
});
