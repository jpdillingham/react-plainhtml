import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContentFrameComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="content">
                {this.props.content}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { id: state.navigation.id, content: state.navigation.content }
};

const ContentFrame = connect(mapStateToProps)(ContentFrameComponent)

export default ContentFrame