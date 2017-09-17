import React from 'react';

export default class AddTodoBase extends React.Component {

    state = {
        text: ''
    };

    onChangeTextHandler = (e) => {
        if(e.target && e.target.value) {
            this.setState({
                text: e.target.value
            });
        } else {
            this.setState({
                text: e
            });
        }
    }

    addButtonHandler = () => {
        console.log(this.state.text);
        this.props.add(this.state.text);
        this.setState({
            text: ''
        });
    }
}