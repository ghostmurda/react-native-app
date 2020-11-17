import {AuthActionTypes, IAuthState, SET_AUTH, SET_USER_INFO, TOGGLE_LOADER} from "./types";

const initialState: IAuthState = {
    auth: false,
    isLoading: false,
    userInfo: {
        name: null,
        photoUrl: null,
        accessToken: null
    }
}

export const authReducer = (state = initialState, action: AuthActionTypes): IAuthState => {
    switch (action.type){
        case TOGGLE_LOADER:{
            return {...state, isLoading: action.payload}
        }
        case SET_AUTH:{
            return {...state, auth: action.payload}
        }
        case SET_USER_INFO:{
            return {...state, userInfo: action.payload}
        }
        default:
            return state;
    }
}