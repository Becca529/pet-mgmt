import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

// -----------------------------------------------------------------------------
//                                    GET
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
//                                    POST
// -----------------------------------------------------------------------------
export const CREATE_VETERINARIAN_SUCCESS = "CREATE_VETERINARIAN_SUCCESS";
export const createVeterinarianSuccess = pet => ({
  type: CREATE_VETERINARIAN_SUCCESS,
  pet
});

export const CREATE_VETERINARIAN_ERROR = "CREATE_VETERINARIAN_ERROR";
export const createVeterinarianError = error => ({
  type: CREATE_VETERINARIAN_ERROR,
  error
});

export const CREATE_VETERINARIAN_BEGIN = "CREATE_VETERINARIAN_BEGIN";
export const createVeterinarianBegin = () => ({
  type: CREATE_VETERINARIAN_BEGIN
});

export const addVeterinarian = (data, petId) => (dispatch, getState) => {
  console.log("getting to add vet");
  const authToken = getState().auth.authToken;
  dispatch(createVeterinarianBegin());
  return fetch(`${API_BASE_URL}/veterinarians/${petId}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((pet) => {
      dispatch(createVeterinarianSuccess(pet))
      // console.log(petId);
  
      // return history.push(`/pet-profile/${petId}`)
    })
    .catch(err => {
      dispatch(createVeterinarianError(err));
    });
};
// -----------------------------------------------------------------------------
//                                    PUT
// -----------------------------------------------------------------------------
export const UPDATE_VETERINARIAN_SUCCESS = "UPDATE_VETERINARIAN_SUCCESS";
export const updateVeterinarianSuccess = updatedPet => ({
  type: UPDATE_VETERINARIAN_SUCCESS,
  updatedPet
});

export const UPDATE_VETERINARIAN_ERROR = "UPDATE_VETERINARIAN_ERROR";
export const updateVeterinarianError = error => ({
  type: UPDATE_VETERINARIAN_ERROR,
  error
});

export const updateVeterinarian = (updatedPetDetails, petId, subDocId) => (
  dispatch,
  getState
) => {
  console.log("gettin to update vet");
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/veterinarians/${petId}/${subDocId}`, {
    method: "PUT",
    body: JSON.stringify(updatedPetDetails),
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ pet }) => dispatch(updateVeterinarianSuccess(pet)))
    .catch(err => {
      dispatch(updateVeterinarianError(err));
    });
};

// -----------------------------------------------------------------------------
//                                    DELETE
// -----------------------------------------------------------------------------

export const DELETE_VETERINARIAN_SUCCESS = "DELETE_VETERINARIAN_SUCCESS";
export const deleteVeterinarianSuccess = () => ({
  type: DELETE_VETERINARIAN_SUCCESS
});

export const DELETE_VETERINARIAN_ERROR = "DELETE_VETERINARIAN_ERROR";
export const deleteVeterinarianError = error => ({
  type: DELETE_VETERINARIAN_ERROR,
  error
});

export const deleteVeterinarian = (subDocId, petId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // return fetch(`${API_BASE_URL}/pets/sub/${subDocId}`, {
  return fetch(`${API_BASE_URL}/veterinarians/${petId}/${subDocId}`, {
    method: "DELETE",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    }
  })
    .then(() => dispatch(deleteVeterinarianSuccess()))
    .catch(err => {
      dispatch(deleteVeterinarianError(err));
    });
};
