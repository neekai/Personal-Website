import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const HeaderDiv = styled.div`
  position: sticky;
`;

class App extends Component {
  
  render() {
    const timeout = { enter: 300, exit: 200 } 
    return (
      <div className="App">
      
      {window.location.href === 'http://localhost:3000/' ? <div><h1>Some Photo</h1><Header/></div> : <Header/>}
          <Main />
      </div>
      
    );
  }
}

export default App;
