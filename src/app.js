let Router = ReactRouter.Router;
let BrowserRouter = ReactRouterDOM.BrowserRouter;
let Route = ReactRouterDOM.Route;
let Link = ReactRouterDOM.Link;
let Switch = ReactRouterDOM.Switch;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <hr/>

                    
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </BrowserRouter>
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
            <NavigationButton key='abc' handler={this.navigate} activeKey={this.state.activeKey}>
                <ABCContent/>
            </NavigationButton>,
            <NavigationButton key='xyz' handler={this.navigate} activeKey={this.state.activeKey}>
                <XYZContent/>
            </NavigationButton>            
        ];
    }

    navigate(content) {
        this.setState({currentContent: content});
    }

    render() {

        return (
            <div>
                <Marquee id="first" greeting="Tic Tac Toe!"/>
                <Game />
                <Marquee id="second" greeting="This is another greeting!"/>

                <button onClick={() => this.setState({currentContent: <XYZContent/>})}>Switch</button>
                
                <NavigationButton handler={this.navigate}>
                    <ABCContent/>
                </NavigationButton>
                
                <NavigationButton handler={this.navigate}>
                    <XYZContent/>
                </NavigationButton>

                <hr/>

                {this.navigationButtons}

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

class ABCContent extends React.Component {
    render() {
        return (<h3>ABC</h3>);
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
                this.props.handler(this.props.children)}
            }>
                {this.props.activeKey == this.props.key ? 'active' : 'inactive'}
            </button>
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
