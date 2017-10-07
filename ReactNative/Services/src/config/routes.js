import React from 'react';
import {View} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import {Home, About, Contact} from '../component/index';

export let Routes = () => (
    <NativeRouter>
        <View>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </View>
    </NativeRouter>
)