import React, { Component } from 'react';
import { Accordion, Dropdown, Form, Input, Grid, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import { getFighters, selectFighter, createNewFighter } from '../../actions'

import FighterInputGroup from './FighterInputGroup';

class Fighters extends Component {
  componentWillMount(){
    this.props.getFighters()
  }
  selectFighter = (e, data) => {
    const {activeFighterTab, selectFighter} = this.props
    const fighter = `fighter_${activeFighterTab}`
    selectFighter({fighter: fighter, fighterId: data.value})
  }

  createNewFighter = (data) => {
    const fighter = `fighter_${this.props.activeFighterTab}`;
    this.props.createNewFighter({data, fighter})
    this.props.openNextTab()
  }

  render() {
    const { activeIndex, fightersList, currentFighter, activeFighterTab } = this.props
    return (
      <div>
        <Accordion.Title className="panel panel-main" active={activeIndex === 0} index={0} onClick={this.props.handleClick}>
          Fighter
        </Accordion.Title>
        <Accordion.Content className="panel-main-fighter" active={activeIndex === 0}>
          <FighterInputGroup fighters={fightersList} fighter={currentFighter} activeFighterTab={activeFighterTab} selectFighter={this.selectFighter} createNewFighter={this.createNewFighter}/>
        </Accordion.Content>
      </div>
    )
  }
}

Fighters.propTypes = {
  fightersList: propTypes.array.isRequired,
  activeIndex: propTypes.number,
  activeFighterTab: propTypes.number.isRequired,
  currentFighter: propTypes.object.isRequired,
  openNextTab: propTypes.func.isRequired
}

const getCurrentFighter = (state) => {
  const fighter = `fighter_${state.activeFighterTab}`
  return state[fighter]
}

const getFighterList = (state) => {
  const anotherTab = state.activeFighterTab === 0 ? 1 : 0;
  const activeFighterTab = `fighter_${anotherTab}`
  const currentFighter = state[activeFighterTab]
  const list  = state.fightersList.filter((fighter) => {
    if(fighter.id !== currentFighter.id){
      return fighter
    }
  })
  return list
}

const mapStateToProps = (state) => {
  const {activeFighterTab} = state.fighters
  return {
    activeFighterTab,
    fightersList: getFighterList(state.fighters),
    currentFighter: getCurrentFighter(state.fighters)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFighters: () => {dispatch(getFighters())},
    selectFighter: (data) => {dispatch(selectFighter(data))},
    createNewFighter: ({data, fighter}) => {dispatch(createNewFighter({data, fighter}))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fighters)
