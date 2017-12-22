import { CREATE_ACTION_ROW, SET_ROUND_TAB, SET_SELECT_VALUE, REORDER_ROWS,
          DELETE_LAST_ROW, SHOW_NOTIFICATION, HIDE_NOTIFICATION, COMPLETE_ROW  } from '../constants';
import { STRIKE, STRIKE_DEFENCE, GRAPPLE, GRAPPLE_DEFENCE } from '../config'
import api from '../http/http'

export const setRoundTab = (tabIndex) => {
      return {
        type: SET_ROUND_TAB,
        activeRoundTab: tabIndex
      }
};

export const createActionRow = (data) => {
      return {
        type: CREATE_ACTION_ROW,
        data: data
      }
};

export const saveCompletedRow = ({tab, row}) => dispatch => {
  row.fields.time = `00:0${row.fields.time}`
  api.saveCompletedAction(row)
  .then((response) => {
    if(!row.completed) {
      dispatch(updateRowStatusToCompleted({tab, id: row.id}))
    }
    dispatch(showNotification({message:"Action was successfuly saved!", className: 'success'}))
    setTimeout(() => {dispatch(hideNotification())}, 3000)
  })
  .catch(function (error) {
    dispatch(showNotification({message:"An error was occure while creating row", className: 'error'}))
    setTimeout(() => {dispatch(hideNotification())}, 3000)
  });
}

export const setSelectValue = (data) => {
  return {
    type: SET_SELECT_VALUE,
    data: data
  }
};

export const updateRowStatusToCompleted = (data) => {
  return {
    type: COMPLETE_ROW,
    data: data
  }
};

export const deleteLastRow = (tab) => {
  return {
    type: DELETE_LAST_ROW,
    activeTab: tab,
  }
}

export const deleteAndSaveLastRow = (tab, type, id) => dispatch => {
  api.deleteFighterAction({type, id}).then((response) => {
    dispatch(deleteLastRow(tab))
    dispatch(showNotification({message:"Action was successfuly deleted!", className: 'success'}))
    setTimeout(() => {dispatch(hideNotification())}, 3000)
  }).catch(function (error) {
    dispatch(showNotification({message:"An error was occure while deleting row", className: 'error'}))
    setTimeout(() => {dispatch(hideNotification())}, 3000)
  });
};

export const saveReorderedRows = (data) => {
      return {
        type: REORDER_ROWS,
        round: data
      }
};

export const createAndSaveActionRow = (data) => dispatch => {
  let row ={}
  row['fields'] = createFighterAction(data.fighter_action)
  row['type'] = data.fighter_action
    api.saveFighterAction(row)
    .then((response) => {
      data.id = response.data.id;
      data.row = row.fields
      data.completed = false
      dispatch(createActionRow(data))
    })
    .catch(function (error) {
      dispatch(showNotification({message:"An error was occure while creating row", className: 'error' }))
      setTimeout(() => {dispatch(hideNotification())}, 3000)
    });
}

export const showNotification = (data) => {
  return {
    type: SHOW_NOTIFICATION,
    notification: data
  }
}

export const hideNotification = () => {
  return {
    type: HIDE_NOTIFICATION,
  }
}

const createFighterAction = (fa) => {
  let row = {}
  switch (fa) {
    case "strike":
      row = new STRIKE()
      break;
    case "strike_defence":
      row = new STRIKE_DEFENCE()
      break;
    case "grapple":
      row = new GRAPPLE()
      break;
    case "grapple_defence":
      row = new GRAPPLE_DEFENCE()
      break;
      default: {
        console.log("No action was selected")
      }
  }
    return row;
}
