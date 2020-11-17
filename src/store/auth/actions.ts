import {AuthActionTypes, IUserInfo, SET_AUTH, SET_USER_INFO, TOGGLE_LOADER} from "./types";

export const toggleLoaderCreator = (payload: boolean): AuthActionTypes => {
    return {
        type: TOGGLE_LOADER,
        payload
    }
}

export const setAuthCreator = (payload: boolean): AuthActionTypes => {
    return {
        type: SET_AUTH,
        payload
    }
}

export const setUserInfoCreator = (payload: IUserInfo): AuthActionTypes => {
    return {
        type: SET_USER_INFO,
        payload
    }
}