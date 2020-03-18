import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

const SignUpForm = props => {
  return (
    <View style={signUpStyle.container}>
      <View style={signUpStyle.imageWrapper}>
        <Image
          style={signUpStyle.imageIcon}
          source={require('../assets/leaf.png')}
        />
      </View>
      <View style={signUpStyle.signUpContainer}>
        <Text style={signUpStyle.header}>Sign Up</Text>
        <TextInput style={signUpStyle.inputField} placeholder="Email" />
        <TextInput style={signUpStyle.inputField} placeholder="Password" />
        <TouchableOpacity style={signUpStyle.button}>
          <Text style={signUpStyle.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={signUpStyle.signUpRedirect}>
          <Text
            style={signUpStyle.signUpRedirectBtn}
            onPress={() => props.navigation.navigate('Register')}>Dont have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const signUpStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#252729',
    paddingLeft: 50,
    paddingRight: 50
  },
  signUpContainer: {
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
  signUpRedirect: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20
  },
  signUpRedirectBtn: {
    fontWeight: 'bold',
    color: '#fafafa'
  }
});

export default SignUpForm;
