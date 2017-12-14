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
      this.setState({activeButton: content.props.id, currentContent: content.props.content});
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

              <Navbar>
                  <NavbarButton content={ABCContent}>Link one</NavbarButton>
                  <NavbarButton content={XYZContent}>Link two</NavbarButton>
              </Navbar>

              <br/>

              <NavigationButton id='abc' content={<ABCContent/>} handler={this.navigate} activeButton={this.state.activeButton}>
                  ABC
              </NavigationButton>
              <NavigationButton id='xyz' content={<XYZContent/>} handler={this.navigate} activeButton={this.state.activeButton}>
                  XYZ
              </NavigationButton> 
              <NavigationButton id='about' content={<About/>} handler={this.navigate} activeButton={this.state.activeButton}>
                  About
              </NavigationButton>
              <NavigationButton id='btc' content={<Crypto symbol='BTC'/>} handler={this.navigate} activeButton={this.state.activeButton}>
                  BTC
              </NavigationButton>
              <NavigationButton id='xrp' content={<Crypto symbol='XRP'/>} handler={this.navigate} activeButton={this.state.activeButton}>
                  XRP
              </NavigationButton>

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


export default App;
