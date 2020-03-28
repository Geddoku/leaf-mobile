import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function AboutCourseScreen({ route, navigation }) {
  return (
    <View style={style.container}>
      <Text style={{color: 'white'}}>About Course</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  }
});
