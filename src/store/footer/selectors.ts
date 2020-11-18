import {RootState} from "../rootReducer";

export const selectorActivePage = (state: RootState) => state.footerState.activePage;