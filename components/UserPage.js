import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

import CoursesScreen from './studentComponents/courses';
import ProfileScreen from './studentComponents/studentProfile';
import StreamsScreen from './studentComponents/streams';

const UserPage = props => {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#03d100'
        }}
      >
        <Tab.Screen
          name="Courses"
          component={CoursesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Streams"
          component={StreamsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
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
    marginTop: 400,
    padding: 15,
    backgroundColor: '#03d100'
  },
  buttonText: {
    fontWeight: 'bold'
  }
});

export default UserPage;
