// import data from 'src/data';
import { TOGGLE_OPTIONS, UPDATE_OPTIONS } from '../actions/quiz';

export const initialState = {
  hideOptions: true,
  availableOptions: {
    kanaTypes: ['hiragana', 'katakana'],
    quizLengths: [5, 10, 20, 30, 46],
  },
  currentOptions: {
    kanaType: 'hiragana',
    quizLength: 5,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPTIONS:
      return {
        ...state,
        hideOptions: !state.hideOptions,
      };
    case UPDATE_OPTIONS:
      return {
        ...state,
        currentOptions: {
          ...state.currentOptions,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
