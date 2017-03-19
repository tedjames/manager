import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  CLEAR_EMPLOYEE_FORM
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case CLEAR_EMPLOYEE_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
