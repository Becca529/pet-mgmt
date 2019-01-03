import {CREATE_PET_PROFILE_SUCCESS,CREATE_PET_PROFILE_ERROR} from '../actions/petprofile';
import {FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_ERROR} from '../actions/dashboard'


const initialState = {
    data: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === CREATE_PET_PROFILE_SUCCESS) {
        return Object.assign({}, state, {
            petProfiledata: action.payload,
            error: null
        });
    } else if (action.type === CREATE_PET_PROFILE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    
    } else if (action.type === FETCH_DASHBOARD_SUCCESS) {
        return Object.assign({}, state, {
            error: action.error
        });
        
    } else if (action.type === FETCH_DASHBOARD_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}