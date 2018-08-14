import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    
    return (
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    );
  }
}
 
export default Main;