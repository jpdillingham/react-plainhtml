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

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('app'))
