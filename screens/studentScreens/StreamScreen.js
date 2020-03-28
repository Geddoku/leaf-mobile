import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
import Stream from '../../components/studentComponents/streamComponents/StreamBlock';

const STREAM_DATA = [
  {
    title: 'Learning biology free online',
    author: 'Chris Luck',
    subject: 'Biology',
    streamURL: 'https://www.youtube.com/embed/QnQe0xW_JY4',
    streamIMG: ''
  },
  {
    title: 'Crazy math tricks from scientist',
    author: 'Robert Doe',
    subject: 'Math',
    streamURL: 'https://www.youtube.com/embed/TMubSggUOVE',
    streamIMG: ''
  },
  {
    title: 'Programming on C++ for noobs',
    author: 'Vadim Puidenko',
    subject: 'Programming',
    streamURL: 'https://www.youtube.com/embed/vLnPwxZdW4Y',
    streamIMG: ''
  },
  {
    title: 'Japanese from native japanese speaker',
    author: 'Okabe Rintaro',
    subject: 'Japanese',
    streamURL: 'https://www.youtube.com/embed/b1TAYfStKXs',
    streamIMG: ''
  }
];

export default function StreamNav({ route, navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.streamContainer}>
        <Text style={style.streamText}>Available streams</Text>
      </View>
      <FlatList
        style={style.listContainer}
        data={STREAM_DATA}
        renderItem={({ item }) =>
        <Stream
          title={item.title}
          author={item.author}
          subject={item.subject}
          streamURL={item.streamURL}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 25,
    justifyContent: 'space-around'
  },
  listContainer: {
    marginTop: 10
  },
  streamText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center'
  },
  streamContainer: {
    marginTop: 20
  }
});
