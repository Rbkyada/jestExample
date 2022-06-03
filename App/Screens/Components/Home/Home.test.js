import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import combineReducers from '../../../Reducers/index';
import {createStore} from 'redux';
import {fireEvent, render} from '@testing-library/react-native';
import Home from './Home';

jest.mock('redux-saga', () => () => ({run: jest.fn()}));
jest.mock('redux-persist', () => ({
  persistStore: jest.fn(),
  persistReducer: jest.fn(),
}));
jest.mock('react-native-config');

const UseEffect = callback => {
  React.useEffect(callback);
  return null;
};

const eventData = {
  nativeEvent: {
    contentOffset: {
      x: 0,
      y: 425,
    },
    contentSize: {
      // Dimensions of the scrollable content
      height: 885,
      width: 328,
    },
    layoutMeasurement: {
      // Dimensions of the device
      height: 469,
      width: 328,
    },
  },
};

const Store = createStore(combineReducers);

const component = (
  <Provider store={Store}>
    <Home />
  </Provider>
);

it('renders correctly', () => {
  const tree = render(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('when Flatlist is Empty', () => {
  const {getByTestId} = render(component);
  expect(getByTestId('flatlist').props.data.length).toBe(0);
});

test('render Flatlist data', () => {
  const {getByTestId} = render(component);
  fireEvent.scroll(getByTestId('flatlist'), eventData);
});
