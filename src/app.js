class App extends React.Component {
    render() {
        return (
            <Home />
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContent: <ABCContent/>,
            activeKey: 'abc'
        }

        this.navigate = this.navigate.bind(this);

        this.navigationButtons = [
          
        ];
    }

    navigate(content) {
        this.setState({activeKey: content.props.id, currentContent: content.props.children});
    }

    render() {

        return (
            <div>
                {this.state.activeKey}
                
                <NavigationButton id='abc' handler={this.navigate} activeKey={this.state.activeKey}>
                    <ABCContent/>
                </NavigationButton>
                <NavigationButton id='xyz' handler={this.navigate} activeKey={this.state.activeKey}>
                    <XYZContent/>
                </NavigationButton>  
                
                <ContentFrame>
                    {this.state.currentContent}
                </ContentFrame>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
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
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    render() {
        return ( 
            <button onClick={() => { 
                this.setState({active: true}); 

                this.props.handler(this)}
            }>
                active: {this.props.activeKey}  this: {this.props.id}
                {this.props.activeKey == this.props.id ? 'active' : 'inactive'}
            </button>
        );
    }
}

class ABCContent extends React.Component {
    render() {
        return (
            <div>
                <Marquee id="first" greeting="Tic Tac Toe!"/>
                <Game />
                <Marquee id="second" greeting="This is another greeting!"/>
            </div>
        );
    }
}


class XYZContent extends React.Component {
    render () {
        return (<h3>XYZ</h3>);
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('app'))
