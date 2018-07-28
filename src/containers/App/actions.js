import * as ActionTypes from './constants';

export function getImages(pageNumber) {
  return {
    type: ActionTypes.GET_IMAGES,
    payload: {
      pageNumber
    }
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