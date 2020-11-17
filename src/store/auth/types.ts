export const TOGGLE_LOADER = 'auth/TOGGLE_LOADER';
export const SET_AUTH = 'auth/SET_AUTH';
export const SET_USER_INFO = 'auth/SET_USER_INFO';

export interface IUserInfo{
    name: string | null;
    photoUrl: string | null;
    accessToken: string | null;
}

export interface IAuthState{
    auth: boolean;
    isLoading: boolean;
    userInfo: IUserInfo;
}

interface IToggleLoaderAction{
    type: typeof TOGGLE_LOADER;
    payload: boolean;
}

interface ISetUserInfoAction{
    type: typeof SET_USER_INFO;
    payload: IUserInfo;
}

interface ISetAuthAction{
    type: typeof SET_AUTH;
    payload: boolean;
}

export type AuthActionTypes =
    IToggleLoaderAction |
    ISetUserInfoAction |
    ISetAuthAction;