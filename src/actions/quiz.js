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
