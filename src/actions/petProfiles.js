import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

// -----------------------------------------------------------------------------
//                                    GET
// -----------------------------------------------------------------------------

export const FETCH_PETS_BEGIN = 'FETCH_PETS_BEGIN';
export const fetchPetsBegin = () => ({
    type: FETCH_PETS_BEGIN
});

export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const fetchPetsSuccess = pets => ({
    type: FETCH_PETS_SUCCESS,
    pets
});

export const FETCH_PETS_ERROR = 'FETCH_PETS_ERROR';
export const fetchPetsError = error => ({
    type: FETCH_PETS_ERROR,
    error
});

export const fetchPetProfiles = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchPetsBegin());
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
        .then((pets) => dispatch(fetchPetsSuccess(pets)))
        .catch(error => {
            dispatch(fetchPetsError(error));
        });
}


// -----------------------------------------------------------------------------
//                                    POST
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
//                                    PUT
// -----------------------------------------------------------------------------
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


export const updatePetProfile = (updatedPet, petId) => (dispatch, getState) => {
    console.log("getting to update");
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/pets/${petId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPet),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        // .then(res => normalizeResponseErrors(res))
        // .then(res => res.json())
        .then(() => dispatch(updatePetProfileSucess()))
        .catch(err => {
            dispatch(updatePetProfileError(err));
        });
};
// -----------------------------------------------------------------------------
//                                    DELETE
// -----------------------------------------------------------------------------

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

export const deletePetSubdocument = (petId, subDocId, route) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/${route}/${petId}/${subDocId}`, {
        method: 'DELETE',
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
// -----------------------------------------------------------------------------
//                                    SET PET
// -----------------------------------------------------------------------------

export const SET_CURRENT_PET= 'SET_CURRENT_PET';
export function setCurrentPet (pet) {
    return {
      type: SET_CURRENT_PET,
      pet,
    };
  }

export const SET_CURRENT_PET_DETAIL= 'SET_CURRENT_PET_DETAIL';
export function setCurrentPetDetail (detail, form) {
    return {
      type: SET_CURRENT_PET_DETAIL,
      detail,
      form
    };
  }

export const CLEAR_PET_DETAIL= 'CLEAR_PET_DETAIL';
export function clearPetDetail () {
    return {
      type: CLEAR_PET_DETAIL
    };
  }