import {CREATE_PET_PROFILE_SUCCESS,CREATE_PET_PROFILE_ERROR} from '../actions/createPetProfile';
import {FETCH_PETS_SUCCESS, FETCH_PETS_ERROR} from '../actions/fetchPetProfiles'


const initialState = {
    petlist: [],
    error: null,
    loading: false,
    shouldRedirect: false
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_PET_PROFILE_SUCCESS: 
            return Object.assign({}, state, {
                petlist: [...state.pets, action.payload],
                error: null,
                shouldRedirect: true
            });

        case CREATE_PET_PROFILE_ERROR: 
            return Object.assign({}, state, {
                error: action.error,
            });
    
        case FETCH_PETS_SUCCESS: 
            return Object.assign({}, state, {
               ...state,
               loading: false,
               petlist: action.payload.pets
            });

        case FETCH_PETS_ERROR: 
            return Object.assign({}, state, {
                ...state,
                error: action.payload.error,
                loading: false,
                petlist: []
            });

        default:
            return state;
    }
}
