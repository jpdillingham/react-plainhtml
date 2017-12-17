import React, { Component } from 'react';
import ABCContent from './content/Abc';
import XYZContent from './content/Xyz';
import Crypto from './content/Crypto';
import About from './content/About';
import Navigation from './navigation/Navigation';
import NavbarButton from './navigation/NavbarButton';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentContent: <ABCContent/>,
          activeButton: 'abc'
      }

      this.navigate = this.navigate.bind(this); // why is this necessary,
      this.greet = this.greet.bind(this); // but not this?
  }

  navigate(content) {
      this.setState({currentContent: content});
  }

  testNavigate(active, content) {
      this.props.store.dispatch({ type: 'NAVIGATE', data: { id: active, content: content }});
  }

  greet(name) {
      this.props.store.dispatch({ type: 'HELLO_NAME', name: name});
  }

  render() {

      return (
          <div>
              <button onClick={() => this.greet('Alice')}>Alice</button>
              <button onClick={() => this.greet('Ben')}>Ben</button>
              <button onClick={() => this.greet('Carl')}>Carl</button>

              <button onClick={() => this.testNavigate('testing 1', 'content 1')}>Test 1</button>
              <button onClick={() => this.testNavigate('testing 2', 'content 2')}>Test 2</button>
              <button onClick={() => this.testNavigate('testing 3', 'content 3')}>Test 3</button>

              <br/>

              <Navigation>
              </Navigation>

              {/*<Navbar navigateHandler={this.navigate}>
                  <NavbarButton id='abc' content={<ABCContent/>}>ABC</NavbarButton>
                  <NavbarButton id='xyz' content={<XYZContent/>}>XYZ</NavbarButton>
                  <NavbarButton id='about' content={<About/>}>About</NavbarButton>
                  <NavbarButton id='btc' content={<Crypto symbol='BTC'/>}>BTC</NavbarButton>
                  <NavbarButton id='xrp' content={<Crypto symbol='XRP'/>}>XRP</NavbarButton>
      </Navbar>*/}

              {/*<ContentFrame id='content'>
                  {this.state.currentContent}
    </ContentFrame>}*/}
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

export default App;
