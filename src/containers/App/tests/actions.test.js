import * as actions from '../actions';
import * as ActionTypes from '../constants';

describe('App actions', () => {
  it('should have a type of GET_IMAGES', () => {
    const expected = {
      type: ActionTypes.GET_IMAGES,
    }

    expect(actions.getImages()).toEqual(expected);
  });

  it('should have a type of GET_IMAGES_SUCCESS', () => {
    const payload = {
      photos: {}
    }
    const expected = {
      type: ActionTypes.GET_IMAGES_SUCCESS,
      payload
    }

    expect(actions.getImagesSuccess(payload)).toEqual(expected);
  });
  
  it('should have a type of GET_IMAGES_FAIL', () => {
    const error = new Error('error');
    const expected = {
      type: ActionTypes.GET_IMAGES_FAIL,
      payload: error
    }

    expect(actions.getImagesFail(error)).toEqual(expected);
  });  
});