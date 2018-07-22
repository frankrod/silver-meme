import { put, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from './constants';
import * as appActions from './actions';

export function* fetchImages(action: Action<string>): Saga<void> {
  try {    
    yield put(appActions.getImagesSuccess({image: ''}));
  } catch (err) {
    yield put(appActions.getImagesFail(err));
  }
}

export function* watchGetImages(): Saga<void> {
  yield takeLatest(ActionTypes.GET_IMAGES, fetchImages);
}

export const appSagas = [
  watchGetImages
];
