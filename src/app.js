class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContent: <ABCContent/>,
            activeButton: 'abc'
        }

        this.navigate = this.navigate.bind(this);
    }

    navigate(content) {
        this.setState({activeButton: content.props.id, currentContent: content.props.content});
    }

    render() {

        return (
            <div>
                <NavigationButton id='abc' content={<ABCContent/>} handler={this.navigate} activeButton={this.state.activeButton}>
                    ABC
                </NavigationButton>
                <NavigationButton id='xyz' content={<XYZContent/>} handler={this.navigate} activeButton={this.state.activeButton}>
                    XYZ
                </NavigationButton> 
                <NavigationButton id='about' content={<About/>} handler={this.navigate} activeButton={this.state.activeButton}>
                    About
                </NavigationButton>
                
                <ContentFrame>
                    {this.state.currentContent}
                </ContentFrame>
            </div>
        );
    }
}

class ContentFrame extends React.Component {
    render() {
        return (
            <div id="content">
                {this.props.children}
            </div>
        );
    }
}

class NavigationButton extends React.Component {
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

ReactDOM.render((
    <App/>
), document.getElementById('app'))
