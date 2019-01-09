import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const DELETE_PET_PROFILE_SUCCESS = 'DELETE_PET_PROFILE_SUCCESS';
export const deletePetProfileSucess =  () => ({
    type: DELETE_PET_PROFILE_SUCCESS
});

export const DELETE_PET_PROFILE_ERROR = 'DELETE_PET_PROFILE_ERROR';
export const deletePetProfileError = error => ({
    type: DELETE_PET_PROFILE_ERROR,
    error
});


export const DELETE_PET_SUBDOCUMENT_SUCCESS = 'DELETE_PET_SUBDOCUMENT_SUCCESS';
export const deletePetSubdocumentSuccess =  () => ({
    type: DELETE_PET_SUBDOCUMENT_SUCCESS
});

export const DELETE_PET_SUBDOCUMENT_ERROR = 'DELETE_PET_SUBDOCUMENT_ERROR';
export const deletePetSubdocumentError = error => ({
    type: DELETE_PET_SUBDOCUMENT_ERROR,
    error
});

export const deletePetProfile = (petid) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/pets/${petid}`, {
        method: 'DELETE',
        body: JSON.stringify(petid),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
        }
    })
        .then(() => dispatch(deletePetProfileSucess()))
        .catch(err => {
            dispatch(deletePetProfileError(err));
        });
};


export const deletePetSubdocument = (subdDocId, type) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/pets/details/${subdDocId}`, {
        method: 'DELETE',
        body: JSON.stringify(subdDocId),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(() => dispatch(deletePetSubdocumentSuccess()))
        .catch(err => {
            dispatch(deletePetSubdocumentError(err));
        });
};
