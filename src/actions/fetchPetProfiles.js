import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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

export const SET_CURRENT_PET= 'SET_CURRENT_PET';
export function setCurrentPet (pet) {
    return {
      type: SET_CURRENT_PET,
      pet,
    };
  }

// export const SET_CURRENT_PET= 'SET_CURRENT_PET';
// export const setCurrentPet = (petId) => ({
//     type: SET_CURRENT_PET,
//     petId
// });


// export function setCurrentPet(petId) {
//     return {
//       type: SET_CURRENT_PET,
//       petId,
//     };
//   }

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