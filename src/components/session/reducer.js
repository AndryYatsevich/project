import session from './constants';

export default (state = [], action) => {
    switch (action.type) {
        case session.LOAD_SESSION_ITEM:
            return {sessionItem: action.payload};
        case session.LOAD_POLLS_ITEM:
            return {...state, pollsItem: action.payload};
        default:
            return state;
    }
};

