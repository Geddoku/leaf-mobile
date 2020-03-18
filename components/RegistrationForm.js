import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const RegistrationForm = props => {
  return (
    <View style={regStyle.container}>
      <View style={regStyle.imageWrapper}>
        <Image
          style={regStyle.imageIcon}
          source={require('../assets/leaf.png')}
        />
      </View>
      <View style={regStyle.regContainer}>
        <Text style={regStyle.header}>Registration in Leaf</Text>
        <TextInput style={regStyle.inputField} placeholder="Username" />
        <TextInput style={regStyle.inputField} placeholder="Email" />
        <TextInput style={regStyle.inputField} placeholder="Password" />
        <TouchableOpacity style={regStyle.button}>
          <Text style={regStyle.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={regStyle.registerRedirect}>
          <Text
            style={regStyle.registerRedirectBtn}
            onPress={() => props.navigation.navigate('SignUp')}>Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const regStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#252729',
    paddingLeft: 50,
    paddingRight: 50
  },
  regContainer: {
    alignSelf: 'stretch'
  },
  header: {
    color: '#fafafa',
    fontSize: 24,
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#bababa',
    borderBottomWidth: 2,
    textAlign: 'center'
  },
  inputField: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 15,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#03d100'
  },
  buttonText: {
    fontWeight: 'bold'
  },
  imageIcon: {
    width: 100,
    height: 100,
    tintColor: '#03d100'
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  registerRedirect: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20
  },
  registerRedirectBtn: {
    fontWeight: 'bold',
    color: '#fafafa'
  }
});

export default RegistrationForm;
