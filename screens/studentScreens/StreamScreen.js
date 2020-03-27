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
    streamURL: '',
    streamIMG: ''
  },
  {
    title: 'Crazy math tricks from scientist',
    author: 'Robert Doe',
    subject: 'Math',
    streamURL: '',
    streamIMG: ''
  },
  {
    title: 'Programming on C++ for noobs',
    author: 'Vadim Puidenko',
    subject: 'Programming',
    streamURL: '',
    streamIMG: ''
  },
  {
    title: 'Japanese from native japanese speaker',
    author: 'Okabe Rintaro',
    subject: 'Japanese',
    streamURL: '',
    streamIMG: ''
  }
];

export default function StreamNav({ route, navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={STREAM_DATA}
        renderItem={({ item }) =>
        <Stream
          title={item.title}
          author={item.author}
          subject={item.subject}
          streamURL={item.streamURL}
          streamIMG={item.streamIMG}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#252729',
    flex: 1
  }
});
