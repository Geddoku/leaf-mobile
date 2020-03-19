import React from 'react';
import 'react-native-gesture-handler';
import StudentProfile from "../components/studentComponents/streams";

export default function ProfileNav({ navigation }) {
    return (
        <StudentProfile navigation={navigation}/>
    );
}
