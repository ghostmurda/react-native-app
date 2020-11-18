import {RootState} from "../rootReducer";

export const selectorAuth = (state: RootState) => state.authState.auth;
export const selectorUserInfo = (state: RootState) => state.authState.userInfo;