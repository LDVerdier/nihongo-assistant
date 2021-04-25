import { combineReducers } from 'redux';

import kanaReducer from './kana';
import quizReducer from './quiz';

const rootReducer = combineReducers({
  kanas: kanaReducer,
  quiz: quizReducer,
  // loading: true,
});

export default rootReducer;
