import { GET_FIGHTERS_REQUEST, GET_FIGHTERS_SUCCESS, SELECT_FIGHTER, SET_FIGHTER_TAB, ADD_NEW_FIGHTER } from '../constants';

import api from '../http/http'

export const getFighters = () => dispatch => {
  api.getFightersList()
  .then((response) => {
    dispatch(saveFighters(response.data))
  })
  .catch((error) => {
  });
};

export const saveFighters = (data) => {
  return {
    type: GET_FIGHTERS_SUCCESS,
    data: data
  }
};

export const selectFighter = (data) => {
  return {
    type: SELECT_FIGHTER,
    data: data
  }
};

export const setFighterTab = (tab) => {
  return {
    type: SET_FIGHTER_TAB,
    tab: tab
  }
};

export const addNewFighter = (data) => {
  debugger
  return {
    type: ADD_NEW_FIGHTER,
    data: data
  }
};

export const createNewFighter = ({data, fighter}) => dispatch => {
  api.createNewFighter(data).then((response) => {
    dispatch(addNewFighter({newFighter:response.data, fighter}))
  })
  // return {
  //   type: CREATE_NEW_FIGHTER,
  //   data: data
  // }
};
