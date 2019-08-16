import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const getSmurfs = () => {
    return dispatch => {
        ({ type: FETCH_SMURFS_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log('error in axios request', error);
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.response })
        })
    }
}
