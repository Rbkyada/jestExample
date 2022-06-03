import UserReducer, {INIT_STATE} from '../UserReducer';
import {data} from '../../../config/jest/mockData';

test('returns the same state on an unhandled action', () => {
  expect(UserReducer(INIT_STATE, {type: '_NULL'})).toMatchSnapshot();
});

test('should return the initial state', () => {
  expect(UserReducer(undefined, {})).toEqual(INIT_STATE);
});

test('renders correctly with default state', () => {
  const action = {
    type: '',
    payload: {},
  };
  const newState = UserReducer(INIT_STATE, action);
  expect(newState).toEqual(INIT_STATE);
});

test('renders correctly with GET_USER action', () => {
  const action = {
    type: 'GET_USER',
    payload: {},
  };
  const newState = UserReducer(INIT_STATE, action);
  expect(newState).toEqual({
    ...INIT_STATE,
    user: {},
  });
});

test('renders correctly with SET_USER action', () => {
  const action = {
    type: 'SET_USER',
    payload: data,
  };
  const newState = UserReducer(INIT_STATE, action);
  expect(newState).toEqual({
    ...INIT_STATE,
    user: data,
  });
});

test('renders correctly with GET_USER_LIST action', () => {
  const action = {
    type: 'GET_USER_LIST',
    payload: {},
  };
  const newState = UserReducer(INIT_STATE, action);
  expect(newState).toEqual({
    ...INIT_STATE,
    usersList: {
      data: [],
      isLoading: true,
      error: null,
    },
  });
});

test('renders correctly with SET_USER_LIST action', () => {
  const action = {
    type: 'SET_USER_LIST',
    payload: data,
  };
  const newState = UserReducer(INIT_STATE, action);
  expect(newState).toEqual({
    ...INIT_STATE,
    usersList: {
      data: data,
      isLoading: false,
      error: null,
    },
  });
});
