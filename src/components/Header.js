import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';

const LinksUl = styled.ul`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  font-size: 1.3em;
`
const Sticky = styled.header`
position: sticky;
top: 0;
z-index: 1;
width: 100%;
`;

const LinksLi = styled.li`
  float: left;
`;

const Anchor = styled(NavLink)`
  display: block;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  padding: 14px 16px;
  cursor: pointer;
  &:hover{
    background-color: #111;
  }
  
`

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: null,
     }
  }
  handleClick(index){
    this.setState({ activeIndex: index })
  }
  render() {
    return (
      <div>
        <Switch>
        <Sticky>


        <LinksUl>
          <LinksLi>
          <Anchor to="/" exact activeStyle={{ background:'green' }}>Home</Anchor>
          </LinksLi>
          <LinksLi>
          <Anchor to="/about" exact activeStyle={{ background:'green' }}>About</Anchor>
            
          </LinksLi>
          <LinksLi>
          <Anchor to="/skills/" exact activeStyle={{ background:'green' }}>Skills</Anchor>
          </LinksLi>
          <LinksLi>
          <Anchor to="/projects" exact activeStyle={{ background:'green' }}>Projects</Anchor>
          </LinksLi>
          
          
        </LinksUl>
        </Sticky>
        </Switch>
      </div> 
    );
  }
}
 
export default Header;