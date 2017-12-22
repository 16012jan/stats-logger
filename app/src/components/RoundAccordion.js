import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react'

import RoundTimes from './RoundTimes/RoundTimes';
import RoundActionLogs from './RoundActionLogs/RoundActionLogs';

class RoundAccordion extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }
  handleTabChange = (e, { activeIndex }) => {
    this.setState({ activeTab:activeIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
      <Accordion>
        <RoundTimes activeIndex={activeIndex} handleClick={this.handleClick}/>
        <RoundActionLogs activeIndex={activeIndex} handleClick={this.handleClick}/>
      </Accordion>
    )
  }
}

export default RoundAccordion
