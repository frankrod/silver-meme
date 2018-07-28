import React from 'react';
import App from '../index';
import { getTotalPages } from '../selector'

const state = {
  app: {
    images: undefined
  }
};

const actions = {
  getImages: jest.fn(),
  getImagesSuccess: jest.fn(),
  getImagesFail: jest.fn(),
};

const props = {
  images: state.app.images,
  totalPages: getTotalPages(state.app)
};

describe('<App />', () => {
  describe('mapStateToProps', () => {
    it('Map state to props', () => {
      const { mapStateToProps } = require('../index');
      const mappedProps = mapStateToProps(state);
      expect(mappedProps).toEqual({ ...props });
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should inject the dispatch for every action ', () => {
      const { mapDispatchToProps } = require('../index');
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(Object.keys(result.actions)).toEqual(Object.keys(actions));
    });
  });
});
