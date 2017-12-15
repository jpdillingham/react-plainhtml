import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeButton: null
        }

        this.navigate = this.navigate.bind(this);
    }

    navigate(id, content) {
        this.setState({ activeButton: id });
        
        this.props.navigateHandler(content);
    }
    
    render() { 
        const { children } = this.props;

        var childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { 
            id: child.props.id, 
            activeButton: this.state.activeButton, 
            handler: () => this.navigate(child.props.id, child.props.content)
        }));

        return(
            <div className='navbar'>
                <div>{childrenWithProps}</div>
                <span>Active: {this.state.activeButton}</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.navigate);
}

const NavbarInstance = connect(
    mapStateToProps
  )(Navbar)

export default NavbarInstance;
