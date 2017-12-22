import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import propTypes from 'prop-types';

import { createAndSaveActionRow, saveCompletedRow } from '../actions/actionSelect'

class ActionsNav extends Component {

  state = {isMenuOpened:true}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  toggleMenu = () => {
    this.setState({isMenuOpened : !this.state.isMenuOpened})
  }

  createNewActionRow = (name) => {
    const { currentRow, createAndSaveActionRow, activeRoundTab, saveCompletedRow } = this.props;
    createAndSaveActionRow(
      {round:activeRoundTab, fighter_action: name}
    )
    if(currentRow) {
      saveCompletedRow({tab:activeRoundTab, row:currentRow})
    }
  }

  render() {
    const btnClass = classnames({
      'nav-item': true,
      'hidden-mobile': this.state.isMenuOpened,
    });

    return (
      <div className="menu-wrapper">
        <Grid stackable className="actions-menu">
          <Grid.Row columns={16}>
              <Grid.Column width={2}>
                <span className="actions-menu--text">Select action:</span>
              </Grid.Column>
              <Grid.Column width={3} className={btnClass}>
                <button onClick={ e => this.createNewActionRow('strike') }>STRIKE</button>
              </Grid.Column>
              <Grid.Column width={4} className={btnClass}>
                <button onClick={ e => this.createNewActionRow('strike_defence') }>STRIKE DEFENCE</button>
              </Grid.Column>
              <Grid.Column width={3} className={btnClass}>
                <button onClick={ e => this.createNewActionRow('grapple') }>GAPPLE</button>
              </Grid.Column>
              <Grid.Column width={4} className={btnClass}>
                <button onClick={ e => this.createNewActionRow('grapple_defence') }>GRAPPLE DEFENCE</button>
              </Grid.Column>
         </Grid.Row>
        </Grid>
        <Icon name='bars' onClick={this.toggleMenu}/>
      </div>
    )
  }
}
ActionsNav.propTypes = {
  createAndSaveActionRow: propTypes.func.isRequired,
  saveCompletedRow: propTypes.func.isRequired,
  currentRow: propTypes.object,
  activeRoundTab: propTypes.string.isRequired
}

const getLastCreatedRow = function(state, props) {
  let activeRound = `round_${state.rounds.activeRoundTab}`;
  return state.fighterAction.rounds[activeRound][0]
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAndSaveActionRow: (actionType) => {dispatch(createAndSaveActionRow(actionType))},
    saveCompletedRow: (row) => {dispatch(saveCompletedRow(row))}
  };
};

const mapStateToProps = (state, props) => {
  return {
    activeRoundTab: `round_${state.rounds.activeRoundTab}`,
    currentRow: getLastCreatedRow(state, props),
  };
};

ActionsNav = connect(mapStateToProps, mapDispatchToProps)(ActionsNav);

export default ActionsNav;
