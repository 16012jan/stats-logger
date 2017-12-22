import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Accordion, Tab } from 'semantic-ui-react';

import { setRoundTab } from '../actions/actionSelect'

import RoundAccordion from './RoundAccordion';

const rounds = [
  { menuItem: 'Round 1', render: () => <Tab.Pane><RoundAccordion /></Tab.Pane>},
  { menuItem: 'Round 2', render: () => <Tab.Pane><RoundAccordion /></Tab.Pane> },
  { menuItem: 'Round 3', render: () => <Tab.Pane><RoundAccordion /></Tab.Pane> },
  { menuItem: 'Round 4', render: () => <Tab.Pane><RoundAccordion /></Tab.Pane> },
  { menuItem: 'Round 5', render: () => <Tab.Pane><RoundAccordion /></Tab.Pane> },
]

class Rounds extends Component {
  render() {
    const activeIndex = this.props.activeIndex
    return (
      <div>
        <Accordion.Title className="panel panel-main" active={activeIndex === 2} index={2} onClick={this.props.handleClick}>
          Rounds
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <Tab panes={rounds} onTabChange = {(e, data) => this.props.setRoundTab(data.activeIndex + 1)}/>
        </Accordion.Content>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoundTab: (tab) => {dispatch(setRoundTab(tab))},
  };
};

Rounds = connect(null, mapDispatchToProps)(Rounds);
export default Rounds
