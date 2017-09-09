import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Home, About, Contact } from '../component';

export let Routes = () => (
    <NativeRouter>
        <View style={{flex: 1, width: "100%"}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

        </View>
    </NativeRouter>
);