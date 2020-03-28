import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { fromLeft } from 'react-navigation-transitions';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

import RegistrationScreen from './screens/RegistrationScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartScreen from './screens/StartScreen';
import UserPageScreen from './screens/UserPageScreen';
import TabNavStud from './screens/studentScreens/TabNavigationStudent';
import CoursesScreen from './screens/studentScreens/CourseScreen';
import ProfileScreen from './screens/studentScreens/ProfileScreen';
import StreamScreen from './screens/studentScreens/StreamScreen';
import StartedCourseScreen from './screens/studentScreens/StartedCourseScreen';

export default function App() {
  return (
      <View style={styles.container}>
        <NavigationContainer initialRouteName="Start">
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Register" component={RegistrationScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="UserPage" component={UserPageScreen} />
            <Stack.Screen name="StartedCourse" component={StartedCourseScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
