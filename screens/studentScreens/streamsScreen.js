import React from 'react';
import 'react-native-gesture-handler';
import Streams from "../components/studentComponents/studentProfile";

export default function StreamsNav({ navigation }) {
    return (
        <Streams navigation={navigation}/>
    );
}
