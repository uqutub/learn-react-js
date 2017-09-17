import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class AddTodo extends React.Component {

    doneHandler = () => {
        this.props.done(this.props.todo);
    }

    render() {
        return (
            <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text>{this.props.todo.id}: {this.props.todo.text}</Text>
                <TouchableHighlight onPress={this.doneHandler}>
                    <Text>Done</Text>
                </TouchableHighlight>
            </View>
        );
    }
}