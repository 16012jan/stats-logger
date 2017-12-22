import React, { Component } from 'react';
import { Accordion, Dropdown, Form, Input, Checkbox, Grid, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import propTypes from 'prop-types';

import { weightClass } from '../../config';

import 'react-datepicker/dist/react-datepicker.css';

class EventInputGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {startDate: moment(), event: this.props.event, activeFighterTab:this.props.activeFighterTab}
  }
  handleChange = (date) => {
    this.setState({startDate: date});
  }
  setInputValue=(obj)=>{
    let event = Object.assign(this.state.event, obj)
    this.setState({event: event})
  }


  render() {
    const { event } = this.state
    return (
      <div>
        <Form>
          <Grid>
            <Grid.Row columns={16}>
                <Grid.Column width={6}>
                  <Input fluid placeholder="Event name" value={event.event_name} onChange={e => this.setInputValue({'event_name': e.target.value})} />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Input fluid placeholder="Venue name" value={event.venue_name} onChange={e => this.setInputValue({'venue_name': e.target.value})}/>
                </Grid.Column>
                <Grid.Column width={4}>
                  <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      className="event-date-picker"
                  />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16}>
                <Grid.Column width={8}>
                  <Input fluid placeholder="Win/ Lose/ Draw/ Abcd"  onChange={e => this.setInputValue({'result': e.target.value})} />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Input fluid placeholder="Round Ended" onChange={e => this.setInputValue({'round_ended': e.target.value})} />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Input fluid placeholder="Time Ended" onChange={e => this.setInputValue({'time_ended': e.target.value})} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16}>
                <Grid.Column width={8}>
                  <Input fluid placeholder="Method" onChange={e => this.setInputValue({'method': e.target.value})} />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Input fluid placeholder="Tehnique" onChange={e => this.setInputValue({'tehnique': e.target.value})} />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Input fluid placeholder="Referee" onChange={e => this.setInputValue({'referee': e.target.value})} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16}>
                <Grid.Column width={8}>
                  <Dropdown placeholder='Weight class' fluid selection search options={weightClass} />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Input fluid placeholder="Oponent Name" disabled />
                </Grid.Column>
                <Grid.Column width={4} verticalAlign="middle">
                  <Checkbox fitted label='Championship' checked={event.championship} onChange={e => this.setInputValue({'championship': e.target.checked})}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16}>
                <Grid.Column width={2} verticalAlign="middle">
                  <Button primary>Submit</Button>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    )
  }
}

EventInputGroup.propTypes = {
  event: propTypes.object.isRequired,
  activeFighterTab: propTypes.number.isRequired,
  saveSharedField: propTypes.func.isRequired
}

export default EventInputGroup
