import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const AUTH_USER = {
  img: 'https://images.ua.prom.st/1479859395_maska-na-litso.jpg',
  username: 'Scarlxrd',
  emailAdress: 'scarlxrd@gmail.com',
  education: 'MIT',
  age: 22,
  interests: ['Math, ', 'Computer Science, ', 'Geometry']
}

const profile = props => {

  const [name, setName] = useState(AUTH_USER.username);
  const [knowledge, setKnowledge] = useState(AUTH_USER.education);
  const [age, setAge] = useState(`${AUTH_USER.age}`);
  const [interest, setInterest] = useState(AUTH_USER.interests);

  return (
    <View style={style.container}>
      <View style={{flexDirection: 'row', marginTop: 50, marginBottom: 30}}>
        <Icon
        name='school'
        color='white'
        />
        <Text style={{fontSize: 18, color: '#9c9c9c'}}> Leaf Student
        <Text style={{color: '#e6e6e6'}}> {AUTH_USER.username}</Text></Text>
      </View>
      <View>
        <Avatar
          large
          rounded
          source={{uri: AUTH_USER.img}}
          activeOpacity={0.7}
          width={150}
          height={150}
        />
      </View>
      <View style={style.profile}>
        <View style={{ height: 350, flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={style.profileItem}>
            <Text style={style.profileText}>Username</Text>
            <Text style={style.profileTextChanged}>{AUTH_USER.username}</Text>
          </View>
          <View>
            <Text style={style.profileText}>Email Adress</Text>
            <Text style={style.profileTextChanged}>{AUTH_USER.emailAdress}</Text>
          </View>
          <View style={style.profileItem}>
            <Text style={style.profileTextProfile}>Education</Text>
            <TextInput
              style={style.profileTextChanged}
              value={knowledge}
              setKnowledge={text => setKnowledge(text)}
            />
          </View>
          <View style={style.profileItem}>
            <Text style={style.profileTextProfile}>Age</Text>
            <TextInput
              style={style.profileTextChanged}
              value={age}
              setAge={text => setAge(text)}
            />
          </View>
          <View style={style.profileItem}>
            <Text style={style.profileTextProfile}>Interests</Text>
            <Text style={style.profileTextInterest}>{AUTH_USER.interests}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{marginBottom: 30}}
        onPress={() => props.navigation.navigate('Start')}>
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
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileText: {
    color: '#bababa',
    fontSize: 14
  },
  profileTextChanged: {
    color: 'white'
  },
  profileTextProfile: {
    color: '#5fde45'
  },
  profileTextInterest: {
    color: '#ebebeb'
  }
});

export default profile;
