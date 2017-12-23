import React, { Component } from 'react';

class NavigationButton extends Component {
    render() {
        return ( 
            <button 
                className={this.props.active ? 'button button-active' : 'button'} 
                onClick={() => { this.props.onClick(this.props.id)}}
            >
              {this.props.children}
            </button>
        );
    }
  }

  export default NavigationButton;