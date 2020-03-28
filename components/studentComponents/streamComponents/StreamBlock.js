import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import WatchButton from './WatchButtonBlock';

export default function Stream({ title, author, subject, streamURL,
  streamIMG }) {
  return (
    <View style={style.streamBlock}>
      <View style={style.textContainer}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.author}>{author}</Text>
        <Text style={style.subject}>{subject}</Text>
      </View>
      <View style={style.btnWatchContainer}>
        <WatchButton
          title={title}
          author={author}
          subject={subject}
          streamURL={streamURL}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  streamBlock: {
    borderColor: '#323232',
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: 15,
    height: 100
  },
  textContainer: {
    width: 220,
    padding: 10
  },
  btnWatchContainer: {
    marginLeft: 20,
    marginTop: 30
  },
  title: {
    color: 'white',
    fontSize: 16
  },
  author: {
    color: '#ff1e56',
    fontSize: 14
  },
  subject: {
    color: 'white',
    fontSize: 14
  }
});
