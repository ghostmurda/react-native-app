import {AuthActionTypes, IAuthState, IUserInfo} from "../auth/types";
import {authReducer} from "../auth/reducer";
import {setAuthCreator, setUserInfoCreator, toggleLoaderCreator} from "../auth/actions";

const initialState: IAuthState = {
    auth: false,
    isLoading: false,
    userInfo: {
        name: null,
        photoUrl: null,
        accessToken: null,
        email: null
    }
}

let newState = (state: IAuthState, action: AuthActionTypes) => {
    return authReducer(state, action);
}

describe('auth reducer', () => {
    test('set user info', () => {
        const payload: IUserInfo = {
            name: 'Test name',
            photoUrl: 'test',
            accessToken: 'test',
            email: 'test@gmail.com'
        };
        const action = setUserInfoCreator(payload);
        expect(newState(initialState, action).userInfo).toStrictEqual(payload);
    });

    test('set auth true', () => {
        const payload = true;
        const action = setAuthCreator(payload);
        expect(newState(initialState, action).auth).toBe(payload);
    });

    test('set auth false', () => {
        const payload = false;
        const action = setAuthCreator(payload);
        expect(newState(initialState, action).auth).toBe(payload);
    });

    test('set isLoading true', () => {
        const payload = true;
        const action = toggleLoaderCreator(payload);
        expect(newState(initialState, action).isLoading).toBe(payload);
    });

    test('set isLoading false', () => {
        const payload = false;
        const action = toggleLoaderCreator(payload);
        expect(newState(initialState, action).isLoading).toBe(payload);
    });
});