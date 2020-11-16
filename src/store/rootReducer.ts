import {combineReducers} from 'redux';
//@ts-ignore
import {authReducer} from "./auth/reducer";

export const rootReducer = combineReducers({
    authState: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;