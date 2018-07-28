import * as actions from '../actions';
import reducer from '../reducer';

const initialState = {
  images: undefined
};

describe('App reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return images state', () => {
    const images = { photos: {} };
    expect(reducer({}, actions.getImagesSuccess(images))).toEqual({ images });
  });
});
