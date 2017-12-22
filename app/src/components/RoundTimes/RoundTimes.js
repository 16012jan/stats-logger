import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react'

import TimingsInputGroup from './TimingsInputGroup'

class RoundTimes extends Component {
  render() {
    const activeIndex = this.props.activeIndex
    return (
      <div>
        <Accordion.Title className="panel" active={activeIndex === 0} index={0} onClick={this.props.handleClick}>
          Round Timings
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <TimingsInputGroup />
        </Accordion.Content>
      </div>
    )
  }
}

export default RoundTimes
