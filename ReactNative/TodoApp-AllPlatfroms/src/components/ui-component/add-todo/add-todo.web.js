import React from 'react';

export default class AddTodo extends React.Component {

    state = { text: '' };

    onChangeTextHandler = (e) => {
        this.setState({ text:  e.target.value });
    }

    addButtonHandler = () => {
        console.log(this.state.text);
        this.props.add(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeTextHandler} value={this.state.text} />
                <input type="button" value="Add +" onClick={this.addButtonHandler} />
            </div>
        )
    }
}