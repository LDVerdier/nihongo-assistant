import { generateSlides } from 'src/selectors';
import {
  TOGGLE_OPTIONS, UPDATE_OPTIONS, INITIATE_SLIDES, SET_SLIDE_TO_ANSWERED, INCREMENT_SLIDE_COUNT
} from '../actions/quiz';

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
  slides: [],
  currentSlideIndex: 0,
  hasStarted: false,
  hasFinished: false,
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
    case INITIATE_SLIDES:
      console.log(generateSlides(state.currentOptions.quizLength));
      return {
        ...state,
        slides: generateSlides(state.currentOptions.quizLength),
        hasStarted: true,
      };
    case SET_SLIDE_TO_ANSWERED: {
      const newSlides = state.slides.map((slide, index) => {
        if (index !== state.currentSlideIndex) {
          return slide;
        }
        return ({
          ...slide,
          wasAnswered: true,
        });
      });
      return {
        ...state,
        slides: newSlides,
      };
    }
    case INCREMENT_SLIDE_COUNT:
      return {
        ...state,
        currentSlideIndex: state.currentSlideIndex + 1,
      };

    default:
      return state;
  }
};

export default reducer;
