import { createSelector } from 'reselect';
import { isNil } from 'ramda';

const getAppState = (app) => app;

export const getTotalPages = createSelector(
  getAppState, 
  ({ images }) => {
    if (isNil(images)) return 0;

    return Math.ceil(images.photos.total / images.photos.perpage);
  },
);
