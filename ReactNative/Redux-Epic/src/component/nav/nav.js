import React from 'react';
import {View, Text} from 'react-native';
import { Link } from 'react-router-native'

export default class Nav extends React.Component {


    render() {

        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Link to="/about">
                    <Text>About</Text>
                </Link>
                <Link to="/contact">
                    <Text>Contact</Text>
                </Link>
                <Link to="/">
                    <Text>Home</Text>
                </Link>
            </View>
        );
    }

}