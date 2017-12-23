import React, { Component } from 'react';

class ContentFrame extends React.Component {
    render() {
        return (
            <div id="content">
                {this.props.children}
            </div>
        );
    }
  }

  export default ContentFrame