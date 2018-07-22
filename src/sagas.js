import { all } from 'redux-saga/effects'
import { appSagas } from './containers/App/sagas';

export default function* sagas() {
  yield all([
    ...appSagas,
  ]);
}