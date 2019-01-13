import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

// -----------------------------------------------------------------------------
//                                    GET
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
//                                    POST
// -----------------------------------------------------------------------------
export const CREATE_SITTER_FOOD_SUCCESS = 'CREATE_SITTER_FOOD_SUCCESS';
export const createSitterFoodSuccess =  () => ({
    type: CREATE_SITTER_FOOD_SUCCESS
});

export const CREATE_SITTER_FOOD_ERROR = 'CREATE_SITTER_FOOD_ERROR';
export const createSitterFoodError = error => ({
    type: CREATE_SITTER_FOOD_ERROR,
    error
});

export const CREATE_SITTER_FOOD_BEGIN = 'CREATE_SITTER_FOOD_BEGIN';
export const createSitterFoodBegin = () => ({
    type: CREATE_SITTER_FOOD_BEGIN
});

export const addSitterFood = (data, petId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(createSitterFoodBegin());
    return fetch(`${API_BASE_URL}/sitters/${petId}`, {
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
        .then(() => dispatch(createSitterFoodSuccess()))
        .catch(err => {
            dispatch(createSitterFoodError(err));
        });
};
// -----------------------------------------------------------------------------
//                                    PUT
// -----------------------------------------------------------------------------
export const UPDATE_SITTER_FOOD_SUCCESS = 'UPDATE_SITTER_FOOD_SUCCESS';
export const updateSitterFoodSuccess =  () => ({
    type: UPDATE_SITTER_FOOD_SUCCESS
});

export const UPDATE_SITTER_FOOD_ERROR = 'UPDATE_SITTER_FOOD_ERROR';
export const updateSitterFoodError = error => ({
    type: UPDATE_SITTER_FOOD_ERROR,
    error
});

export const updateSitterFood = (updatedPetDetails, petId, subDocId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/sitters/${petId}/${subDocId}`, {
        method: 'POST',
        body: JSON.stringify(updatedPetDetails),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(() => dispatch(updateSitterFoodSuccess()))
        .catch(err => {
            dispatch(updateSitterFoodError(err));
        });
};


// -----------------------------------------------------------------------------
//                                    DELETE
// -----------------------------------------------------------------------------

export const DELETE_SITTER_FOOD_SUCCESS = 'DELETE_SITTER_FOOD_SUCCESS';
export const deleteSitterFoodSuccess =  () => ({
    type: DELETE_SITTER_FOOD_SUCCESS
});

export const DELETE_SITTER_FOOD_ERROR = 'DELETE_SITTER_FOOD_ERROR';
export const deleteSitterFoodError = error => ({
    type: DELETE_SITTER_FOOD_ERROR,
    error
});

export const deleteSitterFood = (subDocId, petId) => (dispatch, getState) => {
const authToken = getState().auth.authToken;
// return fetch(`${API_BASE_URL}/pets/sub/${subDocId}`, {
return fetch(`${API_BASE_URL}/sitters/${petId}/${subDocId}`, {
    method: 'DELETE',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
    }
})
    .then(() => dispatch(deleteSitterFoodSuccess()))
    .catch(err => {
        dispatch(deleteSitterFoodError(err));
    });
};

