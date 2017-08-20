import React, {
    Component
} from 'react';

class UserRender extends React.Component {

    constructor() {
        super()
    }

    render() {
        console.log('User Render Props', this.props)
        return ( 
            <div>
                {this.props.input.id} - {this.props.input.name}
            </div>

        )
    }

}

export default UserRender;