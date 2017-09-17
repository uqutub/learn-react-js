import React from 'react';
import AddTodoBase from './add-todo.base';

export default class AddTodo extends AddTodoBase {

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeTextHandler} value={this.state.text} />
                <input type="button" value="Add +" onClick={this.addButtonHandler} />
            </div>
        )
    }
}