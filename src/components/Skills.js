import React, { Component } from 'react';
import { SectionsContainer, Section, ScrollToTopOnMount } from 'react-fullpage';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo'],
      scrollBar: false,
      navigation: true,
      verticalAlign: true,
      sectionPaddingTop: '0px',
      sectionPaddingBottom: '0px',
    }
    return (
      <div>
      <SectionsContainer {...options}>
        <Section color='red'>page 1</Section>
        <Section color='blue'>page 2</Section>
      </SectionsContainer>
      </div>
     );
  }
}
 
export default Skills;
