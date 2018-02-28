import {createSelector} from 'reselect';

const getSessionItems = (state) => state.loadSession;
export const getSessionItem = createSelector(getSessionItems, (state) => state.sessionItem);