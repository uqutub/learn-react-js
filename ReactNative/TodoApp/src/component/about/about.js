import React, {
    Component
} from 'react';
import {
    View,
    Text
} from 'react-native';

import Navigation from '../nav/nav';

export default class About extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <View>
                <Navigation />
                <Text> About Page Component </Text>
            </View>
        );
    }

}