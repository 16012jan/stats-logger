import { SET_ROUND_TAB } from '../constants';

const initialState = {
  activeRoundTab: 1
};

export default function rounds(state = initialState, action) {
  switch (action.type) {
    case SET_ROUND_TAB: {
      return {
        ...state,
        activeRoundTab: action.activeRoundTab
      }
    }
    default: {
      return state;
    }
  }
}
