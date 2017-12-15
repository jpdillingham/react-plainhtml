import React, { Component } from 'react';
import ABCContent from './content/Abc';
import XYZContent from './content/Xyz';
import Crypto from './content/Crypto';
import About from './content/About';
import Navbar from './navigation/Navbar';
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

  greet(name) {
      this.props.store.dispatch({ type: 'HELLO_NAME', name: name});
  }

  render() {

      return (
          <div>
              <button onClick={() => this.greet('Alice')}>Alice</button>
              <button onClick={() => this.greet('Ben')}>Ben</button>
              <button onClick={() => this.greet('Carl')}>Carl</button>

              <br/>

              <Navbar navigateHandler={this.navigate}>
                  <NavbarButton id='abc' content={<ABCContent/>}>ABC</NavbarButton>
                  <NavbarButton id='xyz' content={<XYZContent/>}>XYZ</NavbarButton>
                  <NavbarButton id='about' content={<About/>}>About</NavbarButton>
                  <NavbarButton id='btc' content={<Crypto symbol='BTC'/>}>BTC</NavbarButton>
                  <NavbarButton id='xrp' content={<Crypto symbol='XRP'/>}>XRP</NavbarButton>
              </Navbar>

              <ContentFrame id='content'>
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

export default App;
