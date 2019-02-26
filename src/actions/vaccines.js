import {API_BASE_URL} from '../config';

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
