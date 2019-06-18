import { App } from './app';
import React from 'react';
import { create } from 'react-test-renderer';

describe('<App />', () => {
  it('should render correctly', () => {
    const component = create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
