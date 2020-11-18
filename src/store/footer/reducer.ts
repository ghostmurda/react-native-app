import {IFooterState, SET_ACTIVE, setActivePageAction} from "./types";

const initialState: IFooterState = {
    activePage: null
}

export const footerReducer = (state = initialState, action: setActivePageAction): IFooterState => {
    switch (action.type){
        case SET_ACTIVE:{
            return {...state, activePage: action.payload}
        }
        default:
            return state;
    }
}