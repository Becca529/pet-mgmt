import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const UPDATE_PET_PROFILE_SUCCESS = 'UPDATE_PET_PROFILE_SUCCESS';
export const updatePetProfileSucess =  (data) => ({
    type: UPDATE_PET_PROFILE_SUCCESS,
    data
});

export const UPDATE_PET_PROFILE_ERROR = 'UPDATE_PET_PROFILE_ERROR';
export const updatePetProfileError = error => ({
    type: UPDATE_PET_PROFILE_ERROR,
    error
});


export const UPDATE_PET_SUBDOCUMENT_SUCCESS = 'UPDATE_PET_SUBDOCUMENT_SUCCESS';
export const updatePetSubdocumentSuccess =  () => ({
    type: UPDATE_PET_SUBDOCUMENT_SUCCESS
});

export const UPDATE_PET_SUBDOCUMENT_ERROR = 'UPDATE_PET_SUBDOCUMENT_ERROR';
export const updatePetSubdocumentError = error => ({
    type: UPDATE_PET_SUBDOCUMENT_ERROR,
    error
});

export const updatePetProfile = (updatedPet, petid) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/pets/${petid}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPet),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({pet}) => dispatch(updatePetProfileSucess(pet)))
        .catch(err => {
            dispatch(updatePetProfileError(err));
        });
};


export const updatePetSubdocument = (updatedPetDetails, petid) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/pets/details/${petid}`, {
        method: 'POST',
        body: JSON.stringify(updatedPetDetails),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(() => dispatch(updatePetSubdocumentSuccess()))
        .catch(err => {
            dispatch(updatePetSubdocumentError(err));
        });
};
