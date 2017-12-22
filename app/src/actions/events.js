import { SAVE_EVENT_SHARED_FIELDS } from '../constants';

import api from '../http/http'

export const saveSharedField = (data) => {
  return {
    type: SAVE_EVENT_SHARED_FIELDS,
    data: data
  }
};
