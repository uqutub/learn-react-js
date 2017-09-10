import React from 'react';
import {View, Text} from 'react-native';
import Nav from'../nav/nav';


export default class About extends React.Component {


    render() {

        return (
            <View>
                <Nav />
                <Text> About Component / Page </Text>
            </View>
        );
    }

}