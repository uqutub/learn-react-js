import React, { Component } from 'react';

export default class TodoBase extends Component {
    
    state = { myTodoList: [], fontLoaded: false };
    
    constructor() {
        super();
    }


    componentDidMount() { }

    componentWillMount() { }

    componentWillUnmount() { }

    addTodo = (e) => {
        let _s = this.state.myTodoList;
        _s.push({id: this.state.myTodoList.length + 1, text: e});
        this.setState({ myTodoList: _s });
        alert('added');
    }

    doneTodo = (todo) => {
        console.log('done todo ', todo);
    }

}