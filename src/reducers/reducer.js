import * as Actions from '../actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_SHOW:
      return {
        ...state,
      };
    default:
      return state;
  }
}
