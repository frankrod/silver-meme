import React from 'react';
import { render } from 'react-testing-library'
import App from '../index';

it('renders without crashing', () => {
  const { container } = render(<App />)

  expect(container).toMatchSnapshot()
});
