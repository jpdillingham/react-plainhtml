let Router = ReactRouter.Router;
let BrowserRouter = ReactRouterDOM.BrowserRouter;
let Route = ReactRouterDOM.Route;
let Link = ReactRouterDOM.Link;

class App extends React.Component {
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

ReactDOM.render((
    <BrowserRouter>
        <Route path="/" component={App}></Route>
    </BrowserRouter>
), document.getElementById('app'))
