import {FETCH_PETS_SUCCESS, FETCH_PETS_BEGIN, FETCH_PETS_ERROR, FETCH_PET_BEGIN, FETCH_PET_SUCCESS, FETCH_PET_ERROR, SET_CURRENT_PET, CLEAR_PET_DETAIL, CREATE_PET_PROFILE_SUCCESS, CREATE_PET_PROFILE_ERROR, CREATE_PET_PROFILE_BEGIN, UPDATE_PET_PROFILE_SUCCESS, SET_CURRENT_PET_DETAIL, UPDATE_PET_PROFILE_ERROR, DELETE_PET_SUBDOCUMENT_ERROR, DELETE_PET_SUBDOCUMENT_SUCCESS,DELETE_PET_PROFILE_ERROR, DELETE_PET_PROFILE_SUCCESS} from '../actions/petProfiles'
import {CREATE_VACCINE_BEGIN, CREATE_VACCINE_SUCCESS, CREATE_VACCINE_ERROR, UPDATE_VACCINE_ERROR, UPDATE_VACCINE_SUCCESS, DELETE_VACCINE_ERROR, DELETE_VACCINE_SUCCESS} from '../actions/vaccines'
import {CREATE_VETERINARIAN_BEGIN, CREATE_VETERINARIAN_ERROR, CREATE_VETERINARIAN_SUCCESS, UPDATE_VETERINARIAN_ERROR, UPDATE_VETERINARIAN_SUCCESS, DELETE_VETERINARIAN_ERROR, DELETE_VETERINARIAN_SUCCESS} from '../actions/veterinarians'
import {CREATE_SITTER_FOOD_BEGIN, CREATE_SITTER_FOOD_ERROR, CREATE_SITTER_FOOD_SUCCESS, UPDATE_SITTER_FOOD_ERROR, UPDATE_SITTER_FOOD_SUCCESS, DELETE_SITTER_FOOD_ERROR, DELETE_SITTER_FOOD_SUCCESS} from '../actions/sitters'


const initialState = {
    petList: [],
    error: null,
    loading: false,
    redirect: false,
    currentPet: null,
    form: null,
    formStatusEditing: false,
    currentPetDetail: null
};

export default function petprofileReducer (state = initialState, action)  {
    switch(action.type) {
// -----------------------------------------------------------------------------
//                                    PET PROFILE
// -----------------------------------------------------------------------------
        case CREATE_PET_PROFILE_SUCCESS: 
            return Object.assign({}, state, {
                petList: [...state.petList, action.pet], 
                // petList: state.petList.concat(action.pet),
                error: null,
                redirect: true,
            });

        case CREATE_PET_PROFILE_ERROR: 
            return Object.assign({}, state, {
                error: action.error,
            });

        case SET_CURRENT_PET: 
        console.log('getting to set current pet');
            return Object.assign({}, state, {
                currentPet: action.pet,
                formStatusEditing: true,
                currentPetDetail: null
            });

        case SET_CURRENT_PET_DETAIL:
            return Object.assign({}, state, {
                currentPetDetail: action.detail,
                form: action.form,
                formStatusEditing: true,

            });
        
            case CLEAR_PET_DETAIL:
            return Object.assign({}, state, {
                currentPetDetail: null,
                form: null,
                formStatusEditing: false,
            });
    
        case FETCH_PETS_SUCCESS: 
            return Object.assign({}, state, {
                petList: action.pets,
                loading: false,
                redirect: false,
                currentPet: null,
                formStatusEditing: false

            });
   
        case FETCH_PETS_BEGIN:
            return Object.assign({}, state, {
                loading: true,
         });

         case FETCH_PET_BEGIN:
         return Object.assign({}, state, {
             loading: true,
      });

      case FETCH_PET_SUCCESS: 
      return Object.assign({}, state, {
          loading: false,
          redirect: false,
          currentPet: action.pet,
          formStatusEditing: false

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
                redirect: false,
                formStatusEditing: false

        });

        case FETCH_PET_ERROR: 
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
            currentPet: null,
            redirect: false,
            formStatusEditing: false

    });

        case DELETE_PET_SUBDOCUMENT_SUCCESS: 
        console.log("getting to delete success");
            return Object.assign({}, state, {
                error: null,
                redirect: false,
                formStatusEditing: false,
                currentPetDetail: null, 
                currentPet: {
                    ...state,
                    vetData: {
                        ...state.vetData,

                    }.slice(0, action.indexToDelete),
                    ...state.currentPet.vetData(action.indexToDelete + 1)
                }

                // currentPet: [
                //     ...state.filters,
                //     [vetaData]: []

                // ]
                //     state.currentPet.vetData.filter(({id}) => id !== action.subDocId)
            });

        // case DELETE_PET_PROFILE_ERROR:
         case DELETE_PET_PROFILE_SUCCESS:
        //  const numIndex = parseInt(action.index)
         return Object.assign({}, state, {
            error: null,
            redirect: true,
            currentPet: null, 
            petList: state.petList.filter(({id}) => id !== action.petId)
        });

        case DELETE_PET_PROFILE_ERROR: 
        console.log("getting to delete error");
        return Object.assign({}, state, {
            // currentPetDetail: [...state.currentPetDetail, action.pet], 
            error: action.error,
            redirect: false,

        });



        case UPDATE_PET_PROFILE_SUCCESS: 
        console.log("getting to update success");
        return Object.assign({}, state, {
            // currentPetDetail: [...state.currentPetDetail, action.pet], 
            error: null,
            redirect: true,
            formStatusEditing: true

        });

        case UPDATE_PET_PROFILE_ERROR: 
        return Object.assign({}, state, {
            petList: [...state.petList, action.pet], 
            redirect: true,
            error: action.error,
            formStatusEditing: false


        });
        // case UPDATE_PET_PROFILE_SUCCESS:



// -----------------------------------------------------------------------------
//                                   VET
// -----------------------------------------------------------------------------

        case CREATE_VETERINARIAN_BEGIN:
        console.log('getting to create vet begin');
            return Object.assign({}, state, {
                loading: true,
        });

        case CREATE_VETERINARIAN_SUCCESS: 
        console.log('getting to create vet success');
            return Object.assign({}, state, {
                loading: false,
                redirect: true,
                currentPetDetail: null,
                form: null,
                formStatusEditing: false,

        });

        case CREATE_VETERINARIAN_ERROR: 
        console.log('getting to create vet error');
            return Object.assign({}, state, {
                error: action.error,
                loading: false,
                redirect: false,
                currentPetDetail: null,
                form: null,
                formStatusEditing: false,
        });


//Update

case UPDATE_VETERINARIAN_ERROR: 
 console.log('getting to update vet error');
            return Object.assign({}, state, {
                loading: false,
                redirect: false,
                currentPetDetail: null,
                form: null,
                formStatusEditing: false,

});

case UPDATE_VETERINARIAN_SUCCESS:
console.log('getting to update vet success');
    return Object.assign({}, state, {
        loading: false,
        redirect: true,
        // currentPetDetail: [...state.currentPetDetail, action.vet],
        form: 'pet-profile',
        formStatusEditing: true,

    });
//delete


// -----------------------------------------------------------------------------
//                                   SITTERS
// -----------------------------------------------------------------------------

        case CREATE_SITTER_FOOD_BEGIN:
        console.log('getting to create sub begin');
            return Object.assign({}, state, {
                loading: true,
        });

        case CREATE_SITTER_FOOD_SUCCESS: 
        console.log('getting to create sub success');
            return Object.assign({}, state, {
                loading: false,
                redirect: true
        });

        case CREATE_SITTER_FOOD_ERROR: 
        console.log('getting to create sub error');
            return Object.assign({}, state, {
                error: action.error,
                loading: false,
                redirect: false
        });

//Update
//Delete

// -----------------------------------------------------------------------------
//                                   VACCINE
// -----------------------------------------------------------------------------

        case CREATE_VACCINE_BEGIN:
        console.log('getting to create sub begin');
            return Object.assign({}, state, {
                loading: true,
        });

        case CREATE_VACCINE_SUCCESS: 
        console.log('getting to create sub success');
            return Object.assign({}, state, {
                loading: false,
                redirect: true
        });

        case CREATE_VACCINE_ERROR: 
        console.log('getting to create sub error');
            return Object.assign({}, state, {
                error: action.error,
                loading: false,
                redirect: false
        });

        //Update
        //Delete






        default:
            return state;
    }
};

