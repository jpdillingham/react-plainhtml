import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavigationComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeButton: null
        }
    }
    
    render() { 
        const { children } = this.props;

        var childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { 
            id: child.props.id, 
            activeButton: this.state.activeButton, 
            handler: () => this.props.onClick(child.props.id, child.props.content)
        }));

        return(
            <div className='navbar'>
                <div>{childrenWithProps}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { activeButton: state.navigation.id }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (id, content) => {
      dispatch({ type: 'NAVIGATE', data: { id: id, content: content }})
    }
});

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)

export default Navigation