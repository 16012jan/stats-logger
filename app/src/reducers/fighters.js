import { GET_FIGHTERS_SUCCESS, SELECT_FIGHTER, SET_FIGHTER_TAB, ADD_NEW_FIGHTER } from '../constants';
import { FIGHTER } from '../config';
import  R from 'ramda';

const initialState = {
  fightersList: [],
  fighter_0: new FIGHTER(),
  fighter_1: new FIGHTER(),
  activeFighterTab: 0
};

export default function fighters(state = initialState, action) {
  switch (action.type) {
    case GET_FIGHTERS_SUCCESS: {
      const fightersList = action.data;
      return {
        ...state,
        fightersList
      }
    }
    case SELECT_FIGHTER: {
      let fighter = state.fightersList.find((fighter) => fighter.id === action.data.fighterId)
      if (!fighter) {
        fighter = new FIGHTER();
      }
      state[action.data.fighter] = fighter
      return {
        ...state,
        fighters
      }
    }
    case SET_FIGHTER_TAB: {
      const activeFighterTab = action.tab;
      return {
        ...state,
        activeFighterTab
      }
    }
    case ADD_NEW_FIGHTER: {
      const fightersList = R.clone(state.fightersList)
      fightersList.push(action.data.newFighter);
      if(action.data.fighter === "fighter_0"){
        return {
          ...state,
          fightersList,
          fighter_0:action.data.newFighter
        }
      }else {
        return {
          ...state,
          fightersList,
          fighter_1:action.data.newFighter
        }
      }
    }
    default: {
      return state
    }
  }
}
