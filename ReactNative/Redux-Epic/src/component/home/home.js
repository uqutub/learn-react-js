import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Nav from '../nav/nav';

import { todoService } from '../../service/index';
import { connect } from 'react-redux'
import { TodoAction } from '../../store/action/todo';
import { GitAction } from '../../store/action/github';

class Home extends React.Component {

    todoText = '';

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.state = { todoText: '', todos: this.props.todos };
        // todoService.mySubjectObservable.subscribe(x => {
        //     console.log('fireeeeeeeeeed my observable', x);
        // });
        this.props.getMyRepo('uqutub');
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps ---------', nextProps['loader']);
        // console.log('nextProps ---------', nextProps['repo']);
        this.setTodos(nextProps['todos']);
    }

    onChangeHandler = (e) => {
        this.setState({ todoText: e });
    }

    addTodo = () => {
        let o = { id: this.props.todos.length, text: this.state.todoText, status: false }
        this.props.onAddClick(o);
        // todoService.fireMyValue(o);
    }

    deleteTodo(todo) {
        this.props.onDelClick(todo);
    }

    setTodos(arr) {
        this.setState({ todos: arr, todoText: '' });
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


const mapStateToProps = state => {
    return {
        todos: state.todoReducer['todo'],
        repo: state.gitReducer['repo'],
        loader: state.gitReducer['loader'],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddClick: (p) => dispatch(TodoAction.addTodo(p)),
        onDelClick: (x) => dispatch(TodoAction.delTodo(x)),
        getMyRepo: (x) => dispatch(GitAction.getRepos(x))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);