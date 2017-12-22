import { CREATE_ACTION_ROW, SET_SELECT_VALUE, REORDER_ROWS, DELETE_LAST_ROW, COMPLETE_ROW } from '../constants';
import  R from 'ramda';

const initialState = {
  rounds: {
    round_1:[],
    round_2:[],
    round_3:[],
    round_4:[],
    round_5:[],
  }
};

export default function fighterAction(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACTION_ROW: {
      let newRounds = R.clone(state.rounds);
      let order = getOrder(newRounds[action.data.round]);
      newRounds[action.data.round].unshift({
        id: action.data.id,
        type: action.data.fighter_action,
        completed: action.data.completed,
        fields: action.data.row,
        order: order
      });
      return {
        ...state,
        rounds: newRounds
      }
    }
    case SET_SELECT_VALUE: {
      let newRounds = R.clone(state.rounds);
      newRounds[action.data.activeRoundTab].forEach((row) => {
        if(row.id === action.data.id) {
          row.fields[action.data.inputName] = action.data.value;
        }
      })
      return {
        ...state,
        rounds: newRounds
      }
    }
    case DELETE_LAST_ROW: {
      let newRounds = R.clone(state.rounds);
      let rowsCount = newRounds[action.activeTab].length
      if(rowsCount) {
        newRounds[action.activeTab].pop()
      }
      return {
        ...state,
        rounds: newRounds
      }
    }
    case REORDER_ROWS: {
      let newRounds = R.merge(state.rounds, action.round);
      return {
        ...state,
        rounds: newRounds
      }
    }
    case COMPLETE_ROW: {
      let newRounds = R.clone(state.rounds);
      newRounds[action.data.tab].map((row)=> {
        if(row.id === action.data.id) {
          row.completed = true;
        }
      })
      return {
        ...state,
        rounds: newRounds
      }
    }
    default: {
      return state;
    }
  }
}

const getOrder = (rows) => {
  if(!rows.length) {
    return 1
  }
 const num = R.pipe(
    R.pluck('order'),
    R.reduce(R.max(), 0),
    R.add(1)
  )(rows);
    return num
};
