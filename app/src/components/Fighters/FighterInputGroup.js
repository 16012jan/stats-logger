import React, { Component } from 'react';
import { Accordion, Dropdown, Form, Input, Grid, Button } from 'semantic-ui-react';
import propTypes from 'prop-types';
import moment from 'moment';

import { fighterGender } from '../../config';

class FighterInputGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {fighter:this.props.fighter, errorFields: []}
  }
  getFighterOptions = () => {
    const { fighters, selectFighter } = this.props;
    const options = [{text:"", value:null}]
    fighters.map((fighter) => {
      options.push({text: fighter.name, value: fighter.id})
    })
    return options
  }

  formatDate(date) {
    if(date){
      date = moment(date).format('MM/DD/YYYY')
    }
    return date
  }
  setInputValue=(obj)=>{
    let fighter = Object.assign(this.state.fighter, obj)
    this.setState(fighter)
  }

  saveFighter = () => {
    if(this.state.fighter.id) {
      return
    }

    const {fighter} = this.state;
    //
    fighter.dob = '2017-12-14T07:37:30.000Z';
    const err = []
    for(let key in fighter) {
      if(!fighter[key] && key !== 'id'){
        err.push(key)
      }
    }
    if(err.length){
      this.setState({errorFields:err})
      return
    }
    this.props.createNewFighter(this.state.fighter)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({fighter: nextProps.fighter})
  }

  render() {
    const {selectFighter, saveFighterOptions} = this.props
    const {fighter} = this.state;
    const disabled = !!fighter.id;
    return (
      <div>
          <Form className="form-round_timings">
            <Grid>
              <Grid.Row columns={16}>
                  <Grid.Column width={6}>
                    <Dropdown placeholder='Fighter Name' fluid selection search value={fighter.id} options={this.getFighterOptions()} onChange={(e, data) => selectFighter(e, data)}/>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={16}>
                  <Grid.Column width={6}>
                    <Input fluid placeholder="Fighter Name" disabled={disabled} value={fighter.name} onChange={e=>this.setInputValue({'name':e.target.value})}/>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Input fluid placeholder="Dob" disabled={disabled} value={this.formatDate(fighter.dob)} onChange={e=>this.setInputValue({'dob':e.target.value})}/>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Dropdown placeholder='Gender' fluid selection disabled={disabled} options={fighterGender} value={fighter.gender} onChange={(e,data) =>this.setInputValue({'gender': data.value})}/>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input fluid placeholder="Country of birth" disabled={disabled} value={fighter.country} onChange={e=>this.setInputValue({'country':e.target.value})}/>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={16}>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Height (cm)" disabled={disabled} value={fighter.height} onChange={e=>this.setInputValue({'height':e.target.value})}/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input fluid placeholder="Weight (kg)" disabled={disabled} value={fighter.weight} onChange={e=>this.setInputValue({'weight':e.target.value})}/>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Input fluid placeholder="Arm reach (cm)" disabled={disabled} value={fighter.arm_reach} onChange={e=>this.setInputValue({'arm_reach':e.target.value})}/>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Input fluid placeholder="Leg reach (cm)" disabled={disabled} value={fighter.leg_reach} onChange={e=>this.setInputValue({'leg_reach':e.target.value})}/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={16}>
                  <Grid.Column width={2} verticalAlign="middle">
                    <Button primary onClick={this.saveFighter}>Submit</Button>
                  </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
      </div>
    )
  }
}

FighterInputGroup.propTypes = {
  fighters: propTypes.array.isRequired,
  selectFighter: propTypes.func.isRequired,
  createNewFighter: propTypes.func.isRequired,
  fighter: propTypes.object.isRequired,
  activeFighterTab:propTypes.number.isRequired
}

export default FighterInputGroup
