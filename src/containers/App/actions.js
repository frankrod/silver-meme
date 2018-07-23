import * as ActionTypes from './constants';

export function getImages() {
  return {
    type: ActionTypes.GET_IMAGES
  };
}

export function getImagesSuccess(images) {
  return {
    type: ActionTypes.GET_IMAGES_SUCCESS,
    payload: images
  };
}

export function getImagesFail(error) {
  return {
    type: ActionTypes.GET_IMAGES_FAIL,
    payload: error
  };
}