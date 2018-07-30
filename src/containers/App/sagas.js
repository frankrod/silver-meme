import { put, takeLatest, call } from 'redux-saga/effects';

import FlickrService from '../../api/flickrService';
import * as ActionTypes from './constants';
import * as appActions from './actions';

export function* fetchImages(action) {
  try {
    const flickrService = new FlickrService();
    const result = yield call(flickrService.getImages, action.payload.pageNumber);
    yield put(appActions.getImagesSuccess(result));
  } catch (err) {
    yield put(appActions.getImagesFail(err));
  }
}

export function* watchGetImages() {
  yield takeLatest(ActionTypes.GET_IMAGES, fetchImages);
}

export const appSagas = [
  watchGetImages()
];
