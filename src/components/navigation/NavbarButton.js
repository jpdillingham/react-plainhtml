import React, { Component } from 'react';

class NavbarButton extends Component {
    render() {
        return ( 
            <button className={this.props.activeButton == this.props.id ? 'button button-active' : 'button'} onClick={() => { 
                this.props.handler(this)}
            }>
              {this.props.children}
            </button>
        );
    }
  }

  export default NavbarButton;