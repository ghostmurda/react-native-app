import {IFooterState, setActivePageAction, TActivePage} from "../footer/types";
import {setActivePageCreator} from "../footer/actions";
import {footerReducer} from "../footer/reducer";

const initialState: IFooterState = {
    activePage: null
}

let newState = (state: IFooterState, action: setActivePageAction) => {
    return footerReducer(state, action);
}

describe('footer reducer', () => {
    test('set active page', () => {
        const payload: TActivePage = 'appsPage';
        const action = setActivePageCreator(payload);
        expect(newState(initialState, action).activePage).toBe(payload);
    })
});