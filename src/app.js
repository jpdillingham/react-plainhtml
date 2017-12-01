class App extends React.Component {
    render() {
        return (
            <div>
                <Marquee greeting="Tic Tac Toe!"/>
                <Game />
                <Marquee id="second" greeting="This is another greeting!"/>
                <MarqueeControl boundMarquee="second"/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);