import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const CREATE_PET_PROFILE_SUCCESS = 'CREATE_PET_PROFILE_SUCCESS';
export const createPetProfileSucess =  data => ({
    type: CREATE_PET_PROFILE_SUCCESS,
    payload: data
});

export const CREATE_PET_PROFILE_ERROR = 'CREATE_PET_PROFILE_ERROR';
export const createPetProfileError = error => ({
    type: CREATE_PET_PROFILE_ERROR,
    error
});

export const createPetProfile = (data) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/pets`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(createPetProfileSucess(data)))
        .catch(err => {
            dispatch(createPetProfileError(err));
        });
};
