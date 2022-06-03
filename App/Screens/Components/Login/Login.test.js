import 'react-native';
import React from 'react';
import Login from './Login';
import {render, fireEvent} from '@testing-library/react-native';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
let HomeComponent;
beforeEach(() => {
  HomeComponent = render(<Login />);
});
test('renders Snapshot correctly', () => {
  const snap = render(<Login />).toJSON();
  expect(snap).toMatchSnapshot();
});
0;
describe('When email and password are empty', () => {
  test('email input should be empty', () => {
    const {getByTestId} = HomeComponent;
    console.log(getByTestId);
    const usernameInputEl = getByTestId(/email/i);
    expect(usernameInputEl).toBeTruthy();
  });
  test('password input should be empty', () => {
    const {getByTestId} = HomeComponent;
    const passwordInputEl = getByTestId(/password/i);
    expect(passwordInputEl).toBeTruthy();
  });
});
describe('Whem email and password are filled', () => {
  test('change email enter should be rendered', () => {
    const {getByTestId} = HomeComponent;
    fireEvent.changeText(getByTestId('email'));
    expect(getByTestId('email').props.value).toEqual('');
  });
  test('change password enter should be rendered', () => {
    const {getByTestId} = render(<Login />);
    fireEvent.changeText(getByTestId('password'), 'password');
    expect(getByTestId('password').props.value).toEqual('password');
  });
});
test("'Login' button should be rendered", () => {
  const {getByTestId} = render(<Login />);
  fireEvent.press(getByTestId('btnSubmit'));
});