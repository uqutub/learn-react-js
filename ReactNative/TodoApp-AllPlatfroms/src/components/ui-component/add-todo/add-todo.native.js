import React from 'react';
import AddTodoBase from './add-todo.base';
import { Text, View, TouchableHighlight, TextInput, Button } from 'react-native';

export default class AddTodo extends AddTodoBase {

    render() {
        return (
            <View>
                <TextInput onChangeText={this.onChangeTextHandler} value={this.state.text} />
                <Button title="Add +" onPress={this.addButtonHandler} />
            </View>
        );
    }
}