import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react';


class Event extends Component {
  render() {
    const activeIndex = this.props.activeIndex
    return (
      <div>
        <Accordion.Title className="panel panel-main" active={activeIndex === 1} index={1} onClick={this.props.handleClick}>
          Event
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
            {' '}welcome guest in many households across the world.
          </p>
        </Accordion.Content>
      </div>
    )
  }
}

export default Event
