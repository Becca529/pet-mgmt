import {fetchPetBegin, fetchPetProfiles, fetchPetSuccess, FETCH_PETS_SUCCESS, FETCH_PETS_BEGIN, FETCH_PETS_ERROR, FETCH_PET_BEGIN, FETCH_PET_SUCCESS, FETCH_PET_ERROR, SET_CURRENT_PET, CLEAR_PET_DETAIL, CREATE_PET_PROFILE_SUCCESS, CREATE_PET_PROFILE_ERROR, CREATE_PET_PROFILE_BEGIN, UPDATE_PET_PROFILE_SUCCESS, SET_CURRENT_PET_DETAIL, UPDATE_PET_PROFILE_ERROR, DELETE_PET_SUBDOCUMENT_ERROR, DELETE_PET_SUBDOCUMENT_SUCCESS,DELETE_PET_PROFILE_ERROR, DELETE_PET_PROFILE_SUCCESS} from '../../actions/petProfiles'
import {reducer, initialState} from '../../reducers/auth';


describe('auth reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, { type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });
    // describe('clearRedirect', () => {
    //     it('should set state.redirect to false', () => {
    //         const currentState = {redirect: '/some/redirect/link'};
    //         const state = reducer(currentState, clearRedirect());
    //         expect(state.redirect).toEqual(false);
    //     });
    // });

});