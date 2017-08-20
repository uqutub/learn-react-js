import React, {
    Component
} from 'react';
import UserRender from '../user/User';

class Welcome extends React.Component {

    constructor() {
        super()
        this.state = {
            msg: 'Welcome Component',
            users: [{
                    id: '0',
                    name: 'obj1'
                },
                {
                    id: '1',
                    name: 'obj2222222'
                }
            ]
        }

        setTimeout(() => {
            let u =  [{
                    id: '0',
                    name: 'obj1'
                },
                {
                    id: '1',
                    name: 'obj2222222'
                },
                {
                    id: '2',
                    name: 'obj1'
                },
                {
                    id: '3',
                    name: 'obj2222222'
                },
            ];
            this.setState({users: u});
        }, 8000);

        // console.log('Weclome cons');
    }

    renderUsers() {
               const _users = this.state.users.map((x, i) => {

                return(
                    <UserRender key={i} input={x} />
                )
            });

            return _users;
    }

    render() {
        
        // console.log('welcome render fire....')
        return ( 
            <div>
                    <h1> {this.state.msg} </h1>

                    {this.renderUsers()}
                    
                    
            </div>
            
        )
    }

}

export default Welcome;