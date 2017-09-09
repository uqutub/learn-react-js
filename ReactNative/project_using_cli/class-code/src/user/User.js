import React, {
    Component
} from 'react';

class UserRender extends React.Component {

    constructor() {
        super();
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    // buttonClickHandler = () => {
    //     console.log('Button Clicked', this.props.user.id);
    // }

    buttonClickHandler() {
        console.log('Button Clicked', this.props.user.id);
        this.props.viewOutput(this.props.user);
    }

    render() {
        // console.log('User Render Props', this.props)
        return ( 
            <div>
                {this.props.user.id} - {this.props.user.name}
                {/* <button type="button" onClick={ () => { this.buttonClickHandler(); } }> VIEW </button> */}
                <button type="button" onClick={this.buttonClickHandler}> VIEW </button>
                
            </div>
        )
    }

}

export default UserRender;