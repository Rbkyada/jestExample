import * as actions from '../UserActions';

describe('UserActions', () => {
  it('should create an action to get user list', () => {
    const payload = {
      id: 0.11,
      name: 'test',
    };
    const expectedAction = {
      type: 'GET_USER_LIST',
      payload,
    };
    expect(actions.getUserList(payload)).toEqual(expectedAction);
  });

  it('should create an action to get user detail', () => {
    const payload = {
      name: 'Apple',
    };
    const expectedAction = {
      type: 'GET_USER',
    };
    expect(actions.getUserDetail(payload)).toEqual(expectedAction);
  });

  it('should create an action to logout user', () => {
    const expectedAction = {
      type: 'LOG_OUT',
    };
    expect(actions.userLogout()).toEqual(expectedAction);
  });
});
