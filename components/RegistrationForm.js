import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  setPasswordAC,
  setEmailAC,
  setUsernameAC
} from '../redux/reducers/registrationReducer';
import {connect} from 'react-redux';

let stateToProps = state => {
  return {
    username: state.registration.username,
    password: state.registration.password,
    login: state.registration.login
  }
}

let dispatchToProps = dispatch => {
  return {
    setUsername: data => {
      dispatch(setUsernameAC(data))
    },
    setEmail: data => {
      dispatch(setEmailAC(data))
    },
    setPassword: data => {
      dispatch(setPasswordAC(data))
    }
  }
}

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
        <TextInput
          func={props.setUsername}
          placeholder="Username"
          style={regStyle.inputField}
        />
        <TextInput
          func={props.setEmail}
          placeholder="Email"
          style={regStyle.inputField}
        />
        <TextInput
          func={props.setPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={regStyle.inputField}
        />
        <TouchableOpacity data={{name:props.name, email:props.email, password: props.password}} style={regStyle.button}>
          <Text style={regStyle.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')} style={regStyle.registerRedirect}>
          <Text style={regStyle.registerRedirectBtn}>Already have an account?
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
    color: '#fff',
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

const RegistrationContainer = connect(stateToProps, dispatchToProps)(RegistrationForm);

export default RegistrationContainer;
