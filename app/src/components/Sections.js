import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react'

import Fighters from './Fighters/Fighters';
import Event from './Event/Event';
import Rounds from './Rounds';

class Sections extends Component {
  state = { activeIndex: 1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  openNextTab = () => {
    const nextTab = this.state.activeIndex + 1
    this.setState({activeIndex: nextTab})
  }

  render() {
    const { activeIndex } = this.state
    return (
      <Accordion>
        <Fighters activeIndex={activeIndex} handleClick={this.handleClick} openNextTab={this.openNextTab}/>
        <Event activeIndex={activeIndex} handleClick={this.handleClick}/>
        <Rounds activeIndex={activeIndex} handleClick={this.handleClick}/>
      </Accordion>
    )
  }
}

export default Sections;
