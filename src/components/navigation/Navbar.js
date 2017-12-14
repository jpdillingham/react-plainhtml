import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeButton: null,
        }
    }
    
    render() { 
        return(
            <ul className='navbar'>
                {this.props.children}
            </ul>
        );
    }
}

export default Navbar;