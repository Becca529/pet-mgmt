import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const CREATE_PET_PROFILE_SUCCESS = 'CREATE_PET_PROFILE_SUCCESS';
export const createPetProfileSucess =  pet => ({
    type: CREATE_PET_PROFILE_SUCCESS,
    pet
});

export const CREATE_PET_PROFILE_ERROR = 'CREATE_PET_PROFILE_ERROR';
export const createPetProfileError = error => ({
    type: CREATE_PET_PROFILE_ERROR,
    error
});

export const CREATE_PET_PROFILE_BEGIN = 'CREATE_PET_PROFILE_BEGIN';
export const createPetProfileBegin = () => ({
    type: CREATE_PET_PROFILE_BEGIN
});

export const CREATE_PET_SUBDOCUMENT_SUCCESS = 'CREATE_PET_SUBDOCUMENT_SUCCESS';
export const createPetSubdocumentSuccess =  () => ({
    type: CREATE_PET_SUBDOCUMENT_SUCCESS
});

export const CREATE_PET_SUBDOCUMENT_ERROR = 'CREATE_PET_SUBDOCUMENT_ERROR';
export const createPetSubdocumentError = error => ({
    type: CREATE_PET_SUBDOCUMENT_ERROR,
    error
});

export const CREATE_PET_SUBDOCUMENT_BEGIN = 'CREATE_PET_PROFILE_BEGIN';
export const createPetSubdocumentBegin = () => ({
    type: CREATE_PET_SUBDOCUMENT_BEGIN
});

export const createPetProfile = (data) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(createPetProfileBegin());
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
        .then(({pet}) => dispatch(createPetProfileSucess(pet)))
        .catch(err => {
            dispatch(createPetProfileError(err));
        });
};


export const addPetSubdocument = (data, petId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(createPetSubdocumentBegin());
    return fetch(`${API_BASE_URL}/pets/${petId}/vet`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        // .then(res => normalizeResponseErrors(res))
        // .then(res => res.json())
        .then(() => dispatch(createPetSubdocumentSuccess()))
        .catch(err => {
            dispatch(createPetSubdocumentError(err));
        });
};
