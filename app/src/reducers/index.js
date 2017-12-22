import { combineReducers } from 'redux';

import rounds from './rounds';
import fighterAction from './fighterAction';
import notification from './notification';
import fighters from './fighters';
import events from './events';

const rootReducer = combineReducers({
  notification,
  fighters,
  events,
  rounds,
  fighterAction
});

export default rootReducer;
