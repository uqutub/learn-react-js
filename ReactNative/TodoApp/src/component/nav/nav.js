import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

export default class Navigation extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
                        <Text>Home</Text>
                    </Link>
                    <Link to="/about" underlayColor="red" style={styles.navItem}>
                        <Text>About</Text>
                    </Link>
                    <Link to="/contact" underlayColor="yellow" style={styles.navItem}>
                        <Text>Contact</Text>
                    </Link>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
        backgroundColor: 'red'
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
});
