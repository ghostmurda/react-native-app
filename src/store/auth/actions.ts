import {AuthActionTypes, SET_AUTH, SET_NAME, TOGGLE_LOADER} from "./types";

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

export const setNameCreator = (payload: string): AuthActionTypes => {
    return {
        type: SET_NAME,
        payload
    }
}