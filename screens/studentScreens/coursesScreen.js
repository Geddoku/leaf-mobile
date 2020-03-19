import React from 'react';
import 'react-native-gesture-handler';
import Courses from "../components/studentComponents/courses";

export default function CoursesNav({ navigation }) {
    return (
        <Courses navigation={navigation}/>
    );
}
