import React from 'react';

export default class AddTodo extends React.Component {

    doneHandler = () => {
        this.props.done(this.props.todo);
    }

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