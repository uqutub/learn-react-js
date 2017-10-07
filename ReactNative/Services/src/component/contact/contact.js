import React from 'react';
import {View, Text} from 'react-native';
import Nav from'../nav/nav';

export default class Contact extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {

        return (
            <View>
                <Nav />
                <Text> Contact Component / Page </Text>
            </View>
        );
    }

}