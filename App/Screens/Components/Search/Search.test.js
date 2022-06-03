import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Note: test renderer must be required after react-native.
import Search from './Search';

jest.mock('react-native-localize', () => {});
jest.mock('react-native-linear-gradient', () => {});
jest.mock('react-native-config', () => {});

it('renders Snapshot correctly', () => {
  const snap = renderer.create(<Search />).toJSON();
  expect(snap).toMatchSnapshot();
});
