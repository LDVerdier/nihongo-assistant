// import data from 'src/data';
import kanaData from 'src/services/kana';
import { TEST } from '../actions/kana';

export const initialState = {
  list: kanaData.getRawData(),
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
