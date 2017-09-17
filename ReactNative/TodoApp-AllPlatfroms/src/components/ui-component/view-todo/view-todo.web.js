import React from 'react';
import ViewTodoBase from './view-todo.base';

export default class ViewTodo extends ViewTodoBase {


    render() {
        return (
            <div>
                <div>
                    {this.props.todo.id}:  {this.props.todo.text}
                </div>                
                <div> 
                    <input type="button" value="DONE" onClick={this.doneHandler}/>
                </div>
            </div>
        )
    }
}