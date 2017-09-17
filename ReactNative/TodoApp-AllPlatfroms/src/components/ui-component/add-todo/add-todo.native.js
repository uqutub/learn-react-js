import React from 'react';
import AddTodoBase from './add-todo.base';
import { View, TouchableHighlight, TextInput } from 'react-native';
import { Button, Text } from 'native-base';

export default class AddTodo extends AddTodoBase {

    render() {
        return (
            <View>
                <TextInput onChangeText={this.onChangeTextHandler} value={this.state.text} />
                {/* <Button title="Add +" onPress={this.addButtonHandler} /> */}
                <Button bordered success onPress={this.addButtonHandler}>
                    <Text>Add +</Text>
                </Button>
            </View>
        );
    }
}