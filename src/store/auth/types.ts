export const TOGGLE_LOADER = 'auth/TOGGLE_LOADER';
export const SET_AUTH = 'auth/SET_AUTH';
export const SET_NAME = 'auth/SET_NAME';

export interface IAuthState{
    auth: boolean;
    name: string | null;
    isLoading: boolean;
}

interface IToggleLoaderAction{
    type: typeof TOGGLE_LOADER;
    payload: boolean;
}

interface ISetNameAction{
    type: typeof SET_NAME;
    payload: string;
}

interface ISetAuthAction{
    type: typeof SET_AUTH;
    payload: boolean;
}

export type AuthActionTypes =
    IToggleLoaderAction |
    ISetNameAction |
    ISetAuthAction;