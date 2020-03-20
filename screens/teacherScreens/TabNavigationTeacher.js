import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

import Courses from '../../components/teacherComponents/courses';
import Streams from '../../components/teacherComponents/stream';
import StudentProfile from '../../components/teacherComponents/profile';

const TabNavigationTeacher = props => {
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
            <MaterialCommunityIcons name="book" color={color} size={size} />
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
        name="Stream"
        component={Streams}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="webcam" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigationTeacher;
