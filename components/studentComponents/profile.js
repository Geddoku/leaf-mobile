import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const profile = props => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Start')}>
        <Text
          style={{ color: '#fff' }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#252729',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default profile;
