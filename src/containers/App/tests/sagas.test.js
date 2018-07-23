import { put, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';
import * as ActionTypes from '../constants';
import { watchGetImages, fetchImages } from '../sagas';

describe('fetchImages', () => {
  let fetchImagesGenerator;

  beforeEach(() => {
    fetchImagesGenerator = fetchImages()
    fetchImagesGenerator.next();
  });

  it('should dispatch getImagesSuccess action when success', () => {
    const response = { photos: {} };

    const putDescriptor = fetchImagesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(actions.getImagesSuccess(response)));
  });

  it('should dispatch getImagesFail action when fail', () => {
    const response = 'Fetch Error';
    const putDescriptor = fetchImagesGenerator.throw(response).value;

    expect(putDescriptor).toEqual(put(actions.getImagesFail(response)));
  });
});

describe('watchGetImages', () => {
  const watchGetImagesGenerator = watchGetImages();

  it('should start task to watch for GET_IMAGES action', () => {
    const takeLatestDescriptor = watchGetImagesGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ActionTypes.GET_IMAGES, fetchImages));
  });
});
