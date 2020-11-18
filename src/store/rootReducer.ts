import {combineReducers} from 'redux';
import {authReducer} from "./auth/reducer";
import {footerReducer} from "./footer/reducer";

export const rootReducer = combineReducers({
    authState: authReducer,
    footerState: footerReducer
});

export type RootState = ReturnType<typeof rootReducer>;