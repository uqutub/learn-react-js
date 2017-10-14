import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Home, About, Contact } from '../component/index';

import { Provider } from 'react-redux';
import { store } from '../store/index';

export let Routes = () => (
    <Provider store={store}>
        <NativeRouter>
            <View>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </View>
        </NativeRouter>
    </Provider>
)