// action type TOGGLE_OPTIONS
export const TOGGLE_OPTIONS = 'TOGGLE_OPTIONS';

// action creator toggleOptions
export const toggleOptions = () => ({
  type: TOGGLE_OPTIONS,
});

// action type UPDATE_OPTIONS
export const UPDATE_OPTIONS = 'UPDATE_OPTIONS';

// action creator updateOptions
export const updateOptions = (value, name) => ({
  type: UPDATE_OPTIONS,
  value,
  name,
});

// action type INITIATE_SLIDES
export const INITIATE_SLIDES = 'INITIATE_SLIDES';

// action creator initiateSlides
export const initiateSlides = () => ({
  type: INITIATE_SLIDES,
});

// action type SET_SLIDE_TO_ANSWERED
export const SET_SLIDE_TO_ANSWERED = 'SET_SLIDE_TO_ANSWERED';

// action creator setSlideToAnswered
export const setSlideToAnswered = () => ({
  type: SET_SLIDE_TO_ANSWERED,
});

// action type INCREMENT_SLIDE_COUNT
export const INCREMENT_SLIDE_COUNT = 'INCREMENT_SLIDE_COUNT';

// action creator incrementSlideCount
export const incrementSlideCount = () => ({
  type: INCREMENT_SLIDE_COUNT,
});
