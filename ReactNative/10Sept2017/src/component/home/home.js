import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Nav from'../nav/nav';

export default class Home extends React.Component {
    todoText = '';
    constructor() {
        super();
        this.state = {todoText: ''};
        this.state['todos'] = [
            {id: 0, text: 'Todo1 ---', status: false},
            {id: 1, text: 'Todo2 .....', status: false}
        ]
    }

    deleteTodo() {
        alert('Deleted')
    }

    onChangeHandler = (e) => {
        console.log('onChnageHanlder ', e);
        this.setState({todoText: e});
    }

    addTodo = () => {
        let x =  this.state['todos'];
        let o = {id: x.length, text: this.state.todoText, status: false}
        x.push(o);
        this.setState({todos: x, todoText: ''});
    }

    listRender() {
        return this.state['todos'].map(todo => {
            return(
                <View>
                    <Text> {todo.text} </Text>
                    <Button title="Delete" onPress={this.deleteTodo}> </Button>
                </View>
            )
        })
    }


    render() {

        return (
            <View>

                <Nav />
                <Text> Home Component / Page </Text>
                <TextInput
                value={this.state.todoText}
                onChangeText={this.onChangeHandler}
                    maxLength = {40}
                />
                <Button title="Add" onPress={this.addTodo}> </Button>
                {this.listRender()}

            </View>
        );
    }

}