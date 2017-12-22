import { SAVE_EVENT_SHARED_FIELDS } from '../constants';
import { EVENT, SHARED_EVENT } from '../config';
import  R from 'ramda';

const initialState = {
    events: [new EVENT(), new EVENT()],
    sharedEventFields: new SHARED_EVENT()
};

export default function eventsStore(state = initialState, action) {
  switch (action.type) {
    case SAVE_EVENT_SHARED_FIELDS: {
      let sharedEventFields = R.merge(state.sharedEventFields, action.data);
      return {
        ...state,
        sharedEventFields
      }
    }
    default: {
      return state;
    }
  }
}
