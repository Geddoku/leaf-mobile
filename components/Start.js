import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import { SocialIcon } from 'react-native-elements';

const Start = props => {
  return (
    <View style={startStyle.container}>
      <View style={startStyle.imageWrapper}>
        <Image
          style={startStyle.imageIcon}
          source={require('../assets/leaf.png')}
        />
      </View>
      <View style={startStyle.signUpContainer}>
        <Text style={startStyle.header}>Welcome to Leaf</Text>
        <Text style={startStyle.outerHeader}>Education of future</Text>
        <Text style={startStyle.featureText}>TEAM OF PROFESSIONALISTS</Text>
        <Text style={startStyle.featureText}>SHARE YOUR EXPERIENCE</Text>
        <Text style={startStyle.featureText}>INTRODUCING BREAKTHROUGH APPLICATION</Text>
        <View style={startStyle.btnWrapper}>
          <TouchableOpacity
              onPress={() => props.navigation.navigate('Register')}
              style={startStyle.button}>
            <Text style={startStyle.redirectBtn}> Create a new account </Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}
              style={startStyle.button}>
            <Text style={startStyle.redirectBtn}> Login to the account </Text>
          </TouchableOpacity>
          <View style={startStyle.socialIconsContainer}>
            <TouchableOpacity
              style={{ width: 70, height: 70}}
              onPress={() => { Linking.openURL('https://bit.ly/2WCAgib')}}>
              <SocialIcon style={{backgroundColor: '#ff1e56'}} type='github' />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 70, height: 70}}
              onPress={() => { Linking.openURL('https://facebook.com')}}>
              <SocialIcon style={{backgroundColor: '#ff1e56'}} type='facebook' />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 70, height: 70}}
              onPress={() => { Linking.openURL('https://twitter.com')}}>
              <SocialIcon style={{backgroundColor: '#ff1e56'}} type='twitter' />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 70, height: 70}}
              onPress={() => { Linking.openURL('https://youtube.com')}}>
              <SocialIcon style={{backgroundColor: '#ff1e56'}} type='youtube' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const startStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingLeft: 50,
    paddingRight: 50
  },
  signUpContainer: {
    alignSelf: 'stretch'
  },
  header: {
    color: '#fafafa',
    fontSize: 30,
    paddingBottom: 10,
    textAlign: 'center'
  },
  outerHeader: {
    color: '#e6e6e6',
    fontSize: 18,
    paddingBottom: 10,
    marginBottom: 50,
    textAlign: 'center'
  },
  featureText: {
    color: '#ff1e56',
    fontSize: 18,
    paddingBottom: 10,
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
    padding: 15,
    backgroundColor: '#ff1e56',
    marginTop: 20,
    borderRadius: 30
  },
  buttonText: {
    fontWeight: 'bold'
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
  signUpRedirect: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20
  },
  redirectBtn: {
    fontWeight: 'bold',
    color: 'white'
  },
  btnWrapper: {
    marginTop: 30
  },
  socialIconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25
  }
});

export default Start;
