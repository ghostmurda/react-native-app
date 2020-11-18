import {TActivePage, SET_ACTIVE, setActivePageAction} from "./types";

export const setActivePageCreator = (payload: TActivePage): setActivePageAction => {
    return {
        type: SET_ACTIVE,
        payload
    }
}