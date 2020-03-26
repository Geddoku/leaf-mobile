import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';

const SignUpForm = props => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _getUserData = async (userName) => {
    try {
      const value = await AsyncStorage.getItem(userName);
      const item = JSON.parse(value);
      console.log(item);
      if (item.username === userName && item.password === password) {
        alert('Access provided!\nRedirecting to an account.');
        props.navigation.navigate('UserPage', {
          mode: 'Student'
        });
        return item;
      } else {
        alert('Access denied!\nUsername or password incorrect.');
      }
    } catch (error) {}
  }

  function handleUserLogin() {
    _getUserData(username);
  }

  return (
    <View style={signUpStyle.container}>
      <View style={signUpStyle.imageWrapper}>
        <Image
          style={signUpStyle.imageIcon}
          source={require('../assets/leaf.png')}
        />
      </View>
      <View style={signUpStyle.signUpContainer}>
        <Text style={signUpStyle.header}>Sign In</Text>
        <TextInput
          style={signUpStyle.inputField}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={signUpStyle.inputField}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={signUpStyle.button}
          onPress={() => handleUserLogin()}>
          <Text style={signUpStyle.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')} style={signUpStyle.signUpRedirect}>
          <Text style={signUpStyle.signUpRedirectBtn}>Dont have an account?
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
    backgroundColor: '#03d100',
    borderRadius: 30
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
