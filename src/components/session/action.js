import Axios from 'axios';
import sessionItem from './constants';
import pollsItem from './constants';

export const loadSessionItem = () => (dispatch) => {

    Axios
        .get('/session.json')
        .then((res) => {
            dispatch({
                    type: sessionItem.LOAD_SESSION_ITEM,
                    payload: res.data

                }

            );
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};

export const loadPollsItem = (id) => (dispatch) => {
    let link = '/polls' + id + '.json';
    Axios
        .get(link)
        .then((res) => {
            dispatch({
                    type: pollsItem.LOAD_POLLS_ITEM,
                    payload: res.data

                }

            );
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};