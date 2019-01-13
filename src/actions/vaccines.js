import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

// -----------------------------------------------------------------------------
//                                    GET
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
//                                    POST
// -----------------------------------------------------------------------------
export const CREATE_VACCINE_SUCCESS = 'CREATE_VACCINE_SUCCESS';
export const createVaccineSuccess =  () => ({
    type: CREATE_VACCINE_SUCCESS
});

export const CREATE_VACCINE_ERROR = 'CREATE_VACCINE_ERROR';
export const createVaccineError = error => ({
    type: CREATE_VACCINE_ERROR,
    error
});

export const CREATE_VACCINE_BEGIN = 'CREATE_VACCINE_BEGIN';
export const createVaccineBegin = () => ({
    type: CREATE_VACCINE_BEGIN
});

export const addVaccine = (data, petId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(createVaccineBegin());
    return fetch(`${API_BASE_URL}/vaccines/${petId}`, {
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
        .then(() => dispatch(createVaccineSuccess()))
        .catch(err => {
            dispatch(createVaccineError(err));
        });
};
// -----------------------------------------------------------------------------
//                                    PUT
// -----------------------------------------------------------------------------
export const UPDATE_VACCINE_SUCCESS = 'UPDATE_VACCINE_SUCCESS';
export const updateVaccineSuccess =  () => ({
    type: UPDATE_VACCINE_SUCCESS
});

export const UPDATE_VACCINE_ERROR = 'UPDATE_VACCINE_ERROR';
export const updateVaccineError = error => ({
    type: UPDATE_VACCINE_ERROR,
    error
});

export const updateVaccine = (updatedPetDetails, petId, subDocId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/vaccines/${petId}/${subDocId}`, {
        method: 'POST',
        body: JSON.stringify(updatedPetDetails),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(() => dispatch(updateVaccineSuccess()))
        .catch(err => {
            dispatch(updateVaccineError(err));
        });
};


// -----------------------------------------------------------------------------
//                                    DELETE
// -----------------------------------------------------------------------------

export const DELETE_VACCINE_SUCCESS = 'DELETE_VACCINE_SUCCESS';
export const deleteVaccineSuccess =  () => ({
    type: DELETE_VACCINE_SUCCESS
});

export const DELETE_VACCINE_ERROR = 'DELETE_VACCINE_ERROR';
export const deleteVaccineError = error => ({
    type: DELETE_VACCINE_ERROR,
    error
});

export const deleteVaccine = (subDocId, petId) => (dispatch, getState) => {
const authToken = getState().auth.authToken;
// return fetch(`${API_BASE_URL}/pets/sub/${subDocId}`, {
return fetch(`${API_BASE_URL}/vaccines/${petId}/${subDocId}`, {
    method: 'DELETE',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
    }
})
    .then(() => dispatch(deleteVaccineSuccess()))
    .catch(err => {
        dispatch(deleteVaccineError(err));
    });
};

