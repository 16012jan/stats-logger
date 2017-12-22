import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'semantic-ui-react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import propTypes from 'prop-types';
import  R from 'ramda';

import { saveReorderedRows, deleteAndSaveLastRow, saveActionRow, saveCompletedRow } from '../../actions'

import ActionRow from './ActionRow';
import ActionsNav from '../ActionsNav';

class RounActionLogs extends Component {
  reorderRows = (draggableId, id) => {
    const { fighterAction, saveReorderedRows, activeRoundTab, deleteAndSaveLastRow } = this.props
    let newRounds = R.clone(fighterAction);
    let draggableRow = newRounds.find((row) => row.id === draggableId)
    let targetRow = newRounds.find((row) => row.id === id)
    let draggableRowOrder = draggableRow.order
    let targetRowOrder = targetRow.order
    draggableRow.order = targetRowOrder
    targetRow.order = draggableRowOrder
    const obj={}
    obj[activeRoundTab]=newRounds
    saveReorderedRows(obj);
  }

  displayActionRows = () => {
    return this.props.fighterAction.map((row) => {
      return <ActionRow key={row.id} id={row.id} row={row} activeRoundTab={this.props.activeRoundTab} reorderRows = {this.reorderRows}/>
    })
  }

  render() {
    const { activeIndex, activeRoundTab, lastRow } = this.props;
    return (
      <div>
        <Accordion.Title className="panel" active={activeIndex === 1} index={1} onClick={this.props.handleClick}>
          Round Action Logs
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <ActionsNav />
            {this.displayActionRows()}
            {
            !!this.props.fighterAction.length &&
            <div className="last-row-btns">
              <button onClick={e => this.props.saveCompletedRow({tab:activeRoundTab, row:lastRow})}>Save last created</button>
              <span>/</span>
              <button onClick={ e => this.props.deleteAndSaveLastRow(activeRoundTab, lastRow.type, lastRow.id)}>Delete last row</button>
            </div>
            }
        </Accordion.Content>
      </div>
    )
  }
}
RounActionLogs.propTypes = {
  activeIndex: propTypes.number,
  activeRoundTab: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
  deleteAndSaveLastRow: propTypes.func.isRequired,
  fighterAction: propTypes.array.isRequired,
  lastRow: propTypes.object,
  saveReorderedRows: propTypes.func.isRequired,
  saveCompletedRow: propTypes.func.isRequired
}

const getRoundRows = (state) => {
  const activeTab = `round_${state.rounds.activeRoundTab}`
  return state.fighterAction.rounds[activeTab].sort((a, b) => {
    return b.order - a.order
  });
}

const getLastRow = (state) => {
  const activeTab = `round_${state.rounds.activeRoundTab}`
  const round = state.fighterAction.rounds[activeTab]
  return round[round.length-1]
}

const mapStateToProps = (state) => {
  return {
    fighterAction: getRoundRows(state),
    activeRoundTab: `round_${state.rounds.activeRoundTab}`,
    lastRow: getLastRow(state)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteAndSaveLastRow: (tab, type, id) => {dispatch(deleteAndSaveLastRow(tab, type, id))},
    saveReorderedRows: (rows) => {dispatch(saveReorderedRows(rows))},
    saveCompletedRow: (row) => {dispatch(saveCompletedRow(row))},
  };
};

RounActionLogs = connect(mapStateToProps, mapDispatchToProps)(RounActionLogs);
export default DragDropContext(HTML5Backend)(RounActionLogs);
