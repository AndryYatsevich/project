import Axios from 'axios';
import sessionItem from './constants';

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