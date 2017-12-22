import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { setSelectValue } from '../../actions/actionSelect'

import Strike from './Strike'
import StrikeDefence from './StrikeDefence';
import Grapple from './Grapple';
import GrappleDefence from './GrappleDefence';

let rowSource = {
  beginDrag: function (props) {
    return {id: props.id};
  }
};

let rowTarget = {
  hover: function (props, monitor) {
    let draggedId = monitor.getItem().id;

    if (draggedId !== props.id) {
      props.reorderRows(draggedId, props.id)
    }
  }
};

let targetCollect = function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

let sourceCollect = function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class ActionRow extends Component {
  setValue = (e, cb) => {
    let value, name;
    value = cb ? value = !cb.checked : e.target.value;
    name  = cb ? cb.name : e.target.name;
     const data = {
      id: this.props.id,
      activeRoundTab: this.props.activeRoundTab,
      inputName: name,
      value: value
    }
    this.props.setSelectValue(data)
  }
  storeValue = (e) => {
    let time = e.target.value;
    let reg = '^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$';
    if(time.match(reg)){
      this.setState({time})
      let data = {
        id: this.props.id,
        activeRoundTab: this.props.activeRoundTab,
        inputName: e.target.name,
        value: time
      }
      this.props.setSelectValue(data)
    }
  }
  createActionRow = (row) => {
    const { isFocus } = this.props
      switch(row.type) {
        case "strike" :
          return <Strike row={row.fields} setValue={this.setValue} storeValue={this.storeValue} isFocus={isFocus} />
        case "strike_defence" :
          return <StrikeDefence row={row.fields} setValue={this.setValue} storeValue={this.storeValue} isFocus={isFocus}/>
        case "grapple" :
          return <Grapple row={row.fields} setValue={this.setValue} storeValue={this.storeValue} isFocus={isFocus}/>
        case "grapple_defence" :
          return <GrappleDefence row={row.fields} setValue={this.setValue} storeValue={this.storeValue} isFocus={isFocus}/>
        default: {
          console.log("action type is missing")
        }
      }
  }
  render() {
    const row = this.props.row
    const { connectDragSource,connectDropTarget } = this.props;
    return connectDragSource(connectDropTarget(
      <div>
        { this.createActionRow(row) }
      </div>
    ));
  }
}
ActionRow.propTypes = {
  isFocus: propTypes.bool,
  setSelectValue: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  row: propTypes.object.isRequired,
  activeRoundTab: propTypes.string.isRequired,
  reorderRows: propTypes.func.isRequired
}

const checkIfFirstRow = function(state, props) {
  let activeRound = `round_${state.rounds.activeRoundTab}`;
      return state.fighterAction.rounds[activeRound][0].id === props.id
 }

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectValue: (value) => {dispatch(setSelectValue(value))},
  }
}

const mapStateToProps = (state, props) => {
  return {
    isFocus: checkIfFirstRow(state, props)
  }
}

ActionRow = connect(mapStateToProps, mapDispatchToProps)(ActionRow);
let source = DragSource('row', rowSource, sourceCollect)(ActionRow);
let row = DropTarget('row', rowTarget, targetCollect)(source);

export default row;
