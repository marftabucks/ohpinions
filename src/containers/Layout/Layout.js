import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary'

class Layout extends Component {
    state = {  }

    render() { 
        return ( 
            <Auxiliary>
                <div>Navbar</div>
                <main>
                    {this.props.children}
                </main>
                <div>Footer</div>
            </Auxiliary>
        );
    }
}
 
export default Layout;