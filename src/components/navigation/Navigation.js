import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavigationComponent extends Component {
    constructor(props) {
        super(props);

        //this.navigate = this.navigate.bind(this);
    }

    //navigate(id, content) {
    //    this.setState({ activeButton: id });
        
    //    this.props.navigateHandler(content);
    //}
    
    render() { 
        {/*const { children } = this.props;

        var childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { 
            id: child.props.id, 
            activeButton: this.state.activeButton, 
            handler: () => this.navigate(child.props.id, child.props.content)
        }));*/}

        return(
            <div className='navbar'>
                {/*<div>{childrenWithProps}</div>*/}
                <span>Active: {this.props.activeButton} !</span>
                <button onClick={this.props.onClick}>test</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { activeButton: state.navigation.id }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        console.log(ownProps);
      dispatch({ type: 'NAVIGATE', data: { id: ownProps.activeButton, content: 'content' }})
    }
});

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)

export default Navigation