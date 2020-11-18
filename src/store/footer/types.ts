export const SET_ACTIVE = 'footer/SET_ACTIVE'
const appsPage = 'appsPage';
const homePage = 'homePage';
const chatsPage = 'chatsPage';

export type TActivePage = typeof appsPage | typeof homePage | typeof chatsPage;

export interface IFooterState{
    activePage: TActivePage | null;
}

export interface setActivePageAction{
    type: typeof SET_ACTIVE;
    payload: TActivePage
}