// import data from 'src/data';
import { TEST } from '../actions/quiz';

export const initialState = {

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
