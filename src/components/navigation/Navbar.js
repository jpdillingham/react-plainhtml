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

    hash(s) {
        var a = 1, c = 0, h, o;
        if (s) {
            a = 0;
            for (h = s.length - 1; h >= 0; h--) {
                o = s.charCodeAt(h);
                a = (a<<6&268435455) + o + (o<<14);
                c = a & 266338304;
                a = c!==0?a^c>>21:a;
            }
        }
        return String(a);
    };
    
    render() { 
        const { children } = this.props;

        var childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { 
            id: this.hash(child.props.children), 
            activeButton: this.state.activeButton, 
            handler: () => this.navigate(this.hash(child.props.children), child.props.content)
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
    console.log(state);
}

const NavbarInstance = connect(
    mapStateToProps
  )(Navbar)

export default NavbarInstance;
