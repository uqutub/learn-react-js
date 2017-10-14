import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/component/home/home';
import Contact from './src/component/contact/contact';
import About from './src/component/about/about';

import {Routes} from './src/config/routes';


export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'yellow', marginTop: 25}}>
        <Routes />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
