import React from 'react';
import {View, Text} from 'react-native';
import Nav from'../nav/nav';

import { todoService } from '../../service/index';

export default class Contact extends React.Component {

    constructor(props) {
        super(props)
        console.log('todoServiceeeeeeeee from contact....', todoService.getLength());
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