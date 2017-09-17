import React from 'react';

export default class ViewTodoBase extends React.Component {

    doneHandler = () => {
        this.props.done(this.props.todo);
    }
}