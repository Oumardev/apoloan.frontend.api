import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import App from '../App';

test('rend correctement', () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});