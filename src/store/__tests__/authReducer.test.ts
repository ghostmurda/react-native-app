import {AuthActionTypes, IAuthState} from "../auth/types";
import {authReducer} from "../auth/reducer";
import {setAuthCreator, setNameCreator, toggleLoaderCreator} from "../auth/actions";

const initialState: IAuthState = {
    auth: false,
    name: null,
    isLoading: false
}

let newState = (state: IAuthState, action: AuthActionTypes) => {
    return authReducer(state, action);
}

describe('auth reducer', () => {
    test('set name', () => {
        const payload = 'Test name';
        const action = setNameCreator(payload);
        expect(newState(initialState, action).name).toBe(payload);
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