import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

import Courses from '../../components/studentComponents/courses';
import Streams from '../../components/studentComponents/streams';
import StudentProfile from '../../components/studentComponents/profile';

const TabNavigationStudent = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#03d100'
      }}
    >
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StudentProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Streams"
        component={Streams}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigationStudent;
