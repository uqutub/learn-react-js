import React, {
    Component
} from 'react';
import {
    View,
    Text
} from 'react-native';

import Navigation from '../nav/nav';

export default class Home extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <View>
                <Navigation />
                <Text> Home Page Component </Text>
            </View>
        );
    }

}