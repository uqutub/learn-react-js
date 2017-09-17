import React from 'react';
import { Text, View, TouchableHighlight, TextInput, Button } from 'react-native';

export default class AddTodo extends React.Component {

    state = { text: '' };

    onChangeTextHandler = (e) => {
        this.setState({ text: e });
    }

    addButtonHandler = () => {
        console.log(this.state.text);
        this.props.add(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={this.onChangeTextHandler} value={this.state.text} />
                <Button title="Add +" onPress={this.addButtonHandler} />
            </View>
        );
    }
}