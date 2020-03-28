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
import { NavigationContainer } from '@react-navigation/native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';



export default function RegistrationScreen({ route, navigation }) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _storeUserData = async (userName, data) => {
      try {
        await AsyncStorage.setItem(userName, JSON.stringify(data));
      } catch (error) {}
    }

    const _getUserData = async (userName) => {
      try {
        const value = await AsyncStorage.getItem(userName);
        const item = JSON.parse(value);
        console.log(item);
        console.log(value);
      } catch (error) {}
    }

    function handleUserInput() {
      let USER_DATA = {
        username: '',
        email: '',
        password: ''
      }

      USER_DATA.username = username;
      USER_DATA.email = email;
      USER_DATA.password = password;

      _storeUserData(username, USER_DATA);
    }

    function handleUserLogin() {
      _getUserData(username);
    }

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
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            style={regStyle.inputField}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            style={regStyle.inputField}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={regStyle.inputField}
          />
          <TouchableOpacity
            style={regStyle.button}
            onPress={() => handleUserInput()}>
            <Text style={regStyle.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={regStyle.registerRedirect}>
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
    backgroundColor: 'black',
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
    backgroundColor: '#ff1e56',
    borderRadius: 30
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  },
  imageIcon: {
    width: 100,
    height: 100,
    tintColor: '#ff1e56'
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
