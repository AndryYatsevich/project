import sessionItem from './constants';

export default (state = [], action) => {
    switch (action.type) {
        case sessionItem.LOAD_SESSION_ITEM:
            console.log('takoe:', action.payload);
            return {sessionItem: action.payload};
        default:
            return state;
    }
};