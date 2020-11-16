import {AuthActionTypes, IAuthState, SET_AUTH, SET_NAME, TOGGLE_LOADER} from "./types";

const initialState: IAuthState = {
    auth: false,
    name: null,
    isLoading: false
}

export const authReducer = (state = initialState, action: AuthActionTypes): IAuthState => {
    switch (action.type){
        case TOGGLE_LOADER:{
            return {...state, isLoading: action.payload}
        }
        case SET_AUTH:{
            return {...state, auth: action.payload}
        }
        case SET_NAME:{
            return {...state, name: action.payload}
        }
        default:
            return state;
    }
}