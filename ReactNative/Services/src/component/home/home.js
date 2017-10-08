import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Nav from '../nav/nav';

import { todoService } from '../../service/index';

export default class Home extends React.Component {

    todoText = '';

    constructor() {
        super();
        this.state = { todoText: '', todos: todoService.getTodos() };
    }

    componentWillMount() {
        // let cb = (d) => {
        //     console.log('d got data', d);
        // } 
        // todoService.myCallback(cb);
        todoService.myPromise()
            .then((x) => {
                console.log('yahoooooooooooooooo its relsove', x);
            }).catch((x) => {
                console.log('errrrrr its rej', x);
                
            }) ;
    }

    // componentDidMount() {
    //     let abc = async () => {
    //         var a = await todoService.myPromise();
    //         console.log('aaaaaaaaaaa', a);
    //     }
    //     abc();
    // }

    deleteTodo(todo) {
        todoService.deleteTodo(todo);
        this.getTodos();
    }

    onChangeHandler = (e) => {
        this.setState({ todoText: e });
    }

    addTodo = () => {
        // let x = this.state['todos'];
        let o = { id: todoService.getLength(), text: this.state.todoText, status: false }
        // x.push(o);
        todoService.addTodo(o);
        this.updateState();
    }

    updateState() {
        this.setState({ todos: todoService.getTodos(), todoText: '' });
    }

    listRender() {
        return this.state['todos'].map(todo => {
            return (
                <View key={todo.id}>
                    <Text> {todo.text} </Text>
                    <Button title="Delete" onPress={() => { this.deleteTodo(todo) }}> </Button>
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
                    maxLength={40}
                />
                <Button title="Add" onPress={this.addTodo}> </Button>

                {this.listRender()}

            </View>
        );
    }

}