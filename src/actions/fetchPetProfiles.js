import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const fetchPetsSuccess = pets => ({
    type: FETCH_PETS_SUCCESS,
    payload: { pets }
});

export const FETCH_PETS_ERROR = 'FETCH_PETS_ERROR';
export const fetchPetsError = error => ({
    type: FETCH_PETS_ERROR,
    payload: { error }
});


export const fetchPetProfiles = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/pets`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'

        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({dashboard}) => dispatch(fetchPetsSuccess(dashboard)))
        .catch(err => {
            dispatch(fetchPetsError(err));
        });
};