import {CREATE_PET_PROFILE_SUCCESS,CREATE_PET_PROFILE_ERROR, CREATE_PET_PROFILE_BEGIN, CREATE_PET_SUBDOCUMENT_BEGIN, CREATE_PET_SUBDOCUMENT_SUCCESS, CREATE_PET_SUBDOCUMENT_ERROR} from '../actions/createPetProfile';
import {FETCH_PETS_SUCCESS, FETCH_PETS_BEGIN, FETCH_PETS_ERROR, SET_CURRENT_PET} from '../actions/fetchPetProfiles'


const initialState = {
    petList: [],
    error: null,
    loading: false,
    redirect: false,
    currentPet: null,
};

export default function petprofileReducer (state = initialState, action)  {
    switch(action.type) {
        case CREATE_PET_PROFILE_SUCCESS: 
            return Object.assign({}, state, {
                petList: [...state.petList, action.pet], 
                // petList: state.petList.concat(action.pet),
                error: null,
                redirect: true
            });

        case CREATE_PET_PROFILE_ERROR: 
            return Object.assign({}, state, {
                error: action.error,
            });

        case SET_CURRENT_PET: 
            return Object.assign({}, state, {
                currentPet: action.pet,
            });

    
        case FETCH_PETS_SUCCESS: 
            return Object.assign({}, state, {
                petList: action.pets,
                loading: false,
                redirect: false,
                currentPet: null
            });
   
        case FETCH_PETS_BEGIN:
            return Object.assign({}, state, {
                loading: true,
         });

         case CREATE_PET_PROFILE_BEGIN:
            return Object.assign({}, state, {
                loading: true,
          });

        case FETCH_PETS_ERROR: 
            return Object.assign({}, state, {
                error: action.error,
                loading: false,
                petList: [],
                redirect: false
        });

        case CREATE_PET_SUBDOCUMENT_BEGIN:
        console.log('getting to create sub begin');
            return Object.assign({}, state, {
                loading: true,
        });

        case CREATE_PET_SUBDOCUMENT_SUCCESS: 
        console.log('getting to create sub success');
            return Object.assign({}, state, {
                loading: false,
                redirect: true
        });

        case CREATE_PET_SUBDOCUMENT_ERROR: 
        console.log('getting to create sub error');
            return Object.assign({}, state, {
                error: action.error,
                loading: false,
                redirect: false
        });

        default:
            return state;
    }
};

