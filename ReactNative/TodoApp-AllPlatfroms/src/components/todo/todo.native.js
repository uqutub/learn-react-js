import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import TodoBase from './todo.base';
import AddTodoUI from '../ui-component/add-todo/add-todo.native';
import ShowTodoUI from '../ui-component/view-todo/view-todo.native';

export default class Todo extends TodoBase {

    render() {
        return (
            <View style={{ flex: 1, marginTop: 30 }}>
                
                <AddTodoUI add={this.addTodo} />

                <Text>Length: {this.state.myTodoList.length}</Text>

                { this.state.myTodoList.map((t, i) => <ShowTodoUI key={i} todo={t} done={this.doneTodo} />) }
            </View>
        );
    }
}