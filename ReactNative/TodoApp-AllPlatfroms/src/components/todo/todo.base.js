import React, { Component } from 'react';

export default class TodoBase extends Component {
    
    state = { myTodoList: [] };
    
    constructor() {
        super();
    }


    componentDidMount() { }

    componentWillUnmount() { }

    addTodo = (e) => {
        let _s = this.state.myTodoList;
        _s.push({id: this.state.myTodoList.length + 1, text: e});
        this.setState({ myTodoList: _s });
    }

    doneTodo = (todo) => {
        console.log('done todo ', todo);
    }

}