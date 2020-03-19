import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

const UserPage = props => {
  return (
    <View style={style.container}>
      <View style={style.imageWrapper}>
        <Image
          style={style.imageIcon}
          source={require('../assets/leaf.png')}
        />
        <TouchableOpacity style={style.button}>
          <Text
            style={style.buttonText}
            onPress={() => props.navigation.navigate('Start')}>Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#252729',
    paddingLeft: 50,
    paddingRight: 50
  },
  imageIcon: {
    width: 100,
    height: 100,
    tintColor: '#03d100'
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 500,
    padding: 15,
    backgroundColor: '#03d100'
  },
  buttonText: {
    fontWeight: 'bold'
  }
});

export default UserPage;
