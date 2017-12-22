import React, { Component } from 'react';
import { Accordion, Grid, Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { saveSharedField } from '../../actions'

import EventInputGroup from './EventInputGroup';


class Event extends Component {
  render() {
    const { activeIndex, events, activeFighterTab, sharedEventFields, saveSharedField } = this.props
    const event = events[activeFighterTab]
    return (
      <div>
        <Accordion.Title className="panel panel-main" active={activeIndex === 1} index={1} onClick={this.props.handleClick}>
          Event
        </Accordion.Title>
        <Accordion.Content className="panel-main-event" active={activeIndex === 1}>
        <EventInputGroup event={event} activeFighterTab={activeFighterTab} saveSharedField={saveSharedField}/>
        </Accordion.Content>
      </div>
    )
  }
}

Event.propTypes = {
  events: propTypes.array.isRequired,
  sharedEventFields: propTypes.object.isRequired,
  activeFighterTab: propTypes.number.isRequired,
  activeIndex: propTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    sharedEventFields: state.events.sharedEventFields,
    activeFighterTab: state.fighters.activeFighterTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveSharedField: (data) => {dispatch(saveSharedField(data))}
  }
}

Event = connect(mapStateToProps, mapDispatchToProps)(Event)

export default Event
