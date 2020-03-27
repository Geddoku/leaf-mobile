import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import WatchButton from './WatchButtonBlock';

export default function Stream({ title, author, subject, streamURL,
  streamIMG }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{author}</Text>
      <Text>{subject}</Text>
      <WatchButton
        title={title}
        author={author}
        subject={subject}
        streamURL={streamURL}
      />
    </View>
  );
}
