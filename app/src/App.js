import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import { connect } from 'react-redux';
import propType from 'prop-types';

import { setFighterTab } from './actions'

import Sections from './components/Sections';
import Notification from './components/Notification';
import './App.css';

class App extends Component {
  render() {
    const { fighter_0, fighter_1 } = this.props.fighters
    const firstFighterName = fighter_0.name || "Fighter 1"
    const secondFighterName = fighter_1.name || "Fighter 2"
    const panes = [
      { menuItem: firstFighterName, render: () => <Tab.Pane><Sections/></Tab.Pane>},
      { menuItem: secondFighterName, render: () => <Tab.Pane><Sections/></Tab.Pane> },
    ]
    return (
      <div>
        <Notification />
        <Tab panes={panes} onTabChange = {(e, data) => this.props.setFighterTab(data.activeIndex)}/>
      </div>
    )
  }
}

App.propType = {
  fighters: propType.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    fighters: state.fighters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFighterTab: (tab) => dispatch(setFighterTab(tab))
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
