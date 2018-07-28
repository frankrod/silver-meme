import * as ActionTypes from './constants';

const initialState = {
  images: undefined
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_IMAGES_SUCCESS: {
      return { ...state, images: payload };
    }
    default:
      return state;
  }
};

export default appReducer;
