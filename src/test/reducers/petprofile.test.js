import {fetchPetBegin, fetchPetProfiles, fetchPetSuccess, FETCH_PETS_SUCCESS, FETCH_PETS_BEGIN, FETCH_PETS_ERROR, FETCH_PET_BEGIN, FETCH_PET_SUCCESS, FETCH_PET_ERROR, SET_CURRENT_PET, CLEAR_PET_DETAIL, CREATE_PET_PROFILE_SUCCESS, CREATE_PET_PROFILE_ERROR, CREATE_PET_PROFILE_BEGIN, UPDATE_PET_PROFILE_SUCCESS, SET_CURRENT_PET_DETAIL, UPDATE_PET_PROFILE_ERROR, DELETE_PET_SUBDOCUMENT_ERROR, DELETE_PET_SUBDOCUMENT_SUCCESS,DELETE_PET_PROFILE_ERROR, DELETE_PET_PROFILE_SUCCESS} from '../../../src/actions/petProfiles'
import {petprofileReducer, initialState} from '../../../src/reducers/petprofile';




describe('petprofileReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = petprofileReducer(undefined, { type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = petprofileReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    // it('Should clear current pet', () => {
    //     let clearPetState = {
    //         currentPetDetail: null,
    //         form: null,
    //         formStatusEditing: false,
    //     };
    //     const state = petprofileReducer(clearPetState, { type: 'CLEAR_PET_DETAIL' });
    //     expect(state).toBe(clearPetState );


  });


        // case SET_CURRENT_PET: 
        // console.log('getting to set current pet');
        //     return Object.assign({}, state, {
        //         currentPet: action.pet,
        //         formStatusEditing: true,
        //         currentPetDetail: null
        //     });

        // case SET_CURRENT_PET_DETAIL:
        //     return Object.assign({}, state, {
        //         currentPetDetail: action.detail,
        //         form: action.form,
        //         formStatusEditing: true,

        //     });
        
        //     case CLEAR_PET_DETAIL:
        //     return Object.assign({}, state, {
        //         currentPetDetail: null,
        //         form: null,
        //         formStatusEditing: false,
        //     });
    







  