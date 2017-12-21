import React, { Component } from 'react';

class NavbarButton extends Component {
    render() {
        return ( 
            <button className={this.props.activeButton === this.props.id ? 'button button-active' : 'button'} onClick={() => { 
                this.props.handler(this.props.id)}
            }>
              {this.props.children} {this.props.id}
            </button>
        );
    }
  }

  export default NavbarButton;