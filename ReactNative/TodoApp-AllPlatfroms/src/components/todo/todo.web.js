import React from 'react';

import TodoBase from './todo.base';
import AddTodoUI from '../ui-component/add-todo/add-todo.web';
import ShowTodoUI from '../ui-component/view-todo/view-todo.web';

export default class Todo extends TodoBase {

    render() {
        return (
            <div>
                <AddTodoUI add={this.addTodo} />
                <div>
                    Length: {this.state.myTodoList.length}
                </div>
                { this.state.myTodoList.map((t, i) => <ShowTodoUI key={i} todo={t} done={this.doneTodo} />) }
            </div>
        )
    }
}