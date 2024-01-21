import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../../src/screens/Home';

describe('HOME', () => {
  const tree = renderer.create(<Home />).toJSON();

  it('renders snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
