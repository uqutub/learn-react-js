import React, {
    Component
} from 'react';
import UserRender from '../user/User';

class Welcome extends React.Component {

    constructor() {
        super();
        this.count = 0
        this.abc = 'abc';
        this.state = {
            abc: 'abc',
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
            console.log('first');
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
            this.count++;
            this.setState({users: u});
            setTimeout(() => {
                console.log('sec...');
                this.count++;
                 this.setState({abc: 'alakakakal'});
            }, 5000);
        }, 8000);

        // console.log('Weclome cons');
    }

    outputHandler(p) {
        console.log('outputHandler', p)
        alert('View User Details')
    }

    renderUsers() {
        const _users = this.state.users.map((x, i) => {

        return(
             <UserRender key={i} user={x} viewOutput={this.outputHandler} />
            )
        });

    return _users;
    }

    render() {
        
        // console.log('welcome render fire....', this.count);
        
        return ( 
            <div>
                    <h1> {this.state.msg} </h1>

                    {this.renderUsers()}

                    Value of var abc: {this.state.abc}
                    
                    
            </div>
            
        )
    }

}

export default Welcome;