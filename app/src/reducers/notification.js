import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../constants';

const initialState = {
  message: "",
  className: ""
};

export default function notification(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      return {
        message: action.notification.message,
        className: action.notification.className,
      }
    }
    case HIDE_NOTIFICATION: {
      return {
        message: "",
        className: "",
      }
    }
    default: {
      return state;
    }
  }
}
