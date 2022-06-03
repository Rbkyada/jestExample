import 'react-native';
import React from 'react';
import {expectSaga} from 'redux-saga-test-plan';
import {call, put} from 'redux-saga/effects';
import * as rootSaga from '../UserSaga';
import {getUserList} from '../../Services/UserService';
import {baseUrlApi} from '../../ApiConfig/index'; // we'll mock the fetchImages api
import {runSaga} from 'redux-saga';

jest.mock('react-native-config', () => ({
  API_URL: 'https://randomuser.me/api/',
  API_TEST_URL: 'https://randomuser.me/api/',
}));

jest.mock('redux-saga', () => () => ({run: jest.fn()}));
jest.mock('redux-persist', () => ({
  persistStore: jest.fn(),
  persistReducer: jest.fn(),
}));
jest.mock('react-native-config');

//dummy jest test
test('dummy test', () => {
  expect(true).toBe(true);
});

// test getUserList saga with success response
test('getUserList saga with success', async () => {
  const page = 1;
  const response = {
    results: [
      {id: 1, name: 'test'},
      {id: 2, name: 'test2'},
    ],
  };

  const gen = rootSaga.getUserListSaga(page);
});

// test('should load and handle user list', async () => {
//   const dispatchAction = [];

//   const mockedImageList = [
//     {id: '1', name: 'test1'},
//     {id: '2', name: 'test2'},
//   ];

//   getUserList.get = jest.fn(() =>
//     Promise.resolve({data: {results: mockedImageList}}),
//   );

//   const fakeStore = {
//     getState: () => ({nextPage: 1}),
//     dispatch: action => dispatchAction.push(action),
//   };

//   await runSaga((getUserList = fakeStore), rootSaga.loadUserList).done;

//   expect(getUserList.mock.calls.length).toBe(1);
//   expect(dispatchAction.length).toContainEqual({getUserList: mockedImageList});
// });

// test getUserList saga
// test('getUserList saga', () => {
//   const action = yield take('REQUEST_USER');
//   const user = yield call(api.fetchUser, action.payload);
//   const pet = yield call(api.fetchPet, user.petId);
//   const page = 1;
//   const url = `${baseUrlApi}${page}`;
//   const response = {
//     results: [
//       {id: '1', name: 'test1'},
//       {id: '2', name: 'test2'},
//     ],
//   };
// });

//test geyUserListSaga saga
// describe('getUserListSaga', () => {
//   it('should call getUserListSaga', () => {
//     const action = {
//       type: 'GET_USER_LIST',
//     };
//     const saga = expectSaga(rootSaga.getUserListSaga)
//       .withReducer(rootSaga.reducer)
//       .provide([
//         [call(rootSaga.getUserListSaga, action), {data: {results: []}}],
//       ])
//       .put({type: 'GET_USER_LIST_SUCCESS', payload: {results: []}})
//       .dispatch(action)
//       .silentRun();
//     expect(saga.storeState.userList).toEqual([]);
//   });
// });

// describe('UserSaga', () => {
//   test('should call getUserListSaga', () => {
//     const action = {
//       type: 'SET_USER_LIST',
//       payload: 1,
//     };
//     const generator = rootSaga.getUserListSaga(action);
//     expect(generator.next().value).toEqual(
//       put({
//         type: 'SET_USER_LIST',
//         payload: {
//           results: [],
//         },
//       }),
//     );
//   });
// });

// SET_USER_LIST saga test  getUserListSaga
// describe('getUserListSaga', () => {
//   test('should call getUserList', () => {
//     const action = {
//       type: 'SET_USER_LIST',
//       payload: 1,
//     };

//     const generator = rootSaga.getUserListSaga(action);
//     expect(generator.next().value).toEqual(call(rootSaga.getUserList, 100));
//   });
// });

// test('getUserListSaga', () => {
//   const mockResponse = rootSaga.getUserListSaga({
//     payload: {
//       tittle: 'test',
//     },
//   });

//   expect(mockResponse.next().value).toEqual(
//     put({
//       type: 'SET_USER_LIST',
//       payload: {
//         results: null,
//       },
//     }),
//   );

//   // const payload: {
//   //   title: "hello",
//   //   body: "world",
//   // }
// });
