import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const Image = styled.img`
      max-width: 100%;
      height: auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
    `
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      
      autoplaySpeed: 2000,
      cssEase: 'linear',

    }
    return ( 
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <Image src="https://images.unsplash.com/photo-1490535004195-099bc723fa1f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53d16e51c95625168dde435dbd0aaa45&auto=format&fit=crop&w=1480&q=80"/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Slider>
      </div> );
  }
}
 
export default Projects;