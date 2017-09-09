import React, {
    Component
} from 'react';
import {
    View,
    Text
} from 'react-native';

import Navigation from '../nav/nav';

export default class Contact extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <View>
                <Navigation />
                <Text> Contact Page Component </Text>
            </View>
        );
    }

}