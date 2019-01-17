import {fetchPetBegin, fetchPetProfiles, fetchPetSuccess, FETCH_PETS_SUCCESS, FETCH_PETS_BEGIN, FETCH_PETS_ERROR, FETCH_PET_BEGIN, FETCH_PET_SUCCESS, FETCH_PET_ERROR, SET_CURRENT_PET, CLEAR_PET_DETAIL, CREATE_PET_PROFILE_SUCCESS, CREATE_PET_PROFILE_ERROR, CREATE_PET_PROFILE_BEGIN, UPDATE_PET_PROFILE_SUCCESS, SET_CURRENT_PET_DETAIL, UPDATE_PET_PROFILE_ERROR, DELETE_PET_SUBDOCUMENT_ERROR, DELETE_PET_SUBDOCUMENT_SUCCESS,DELETE_PET_PROFILE_ERROR, DELETE_PET_PROFILE_SUCCESS} from '../../../src/actions/petProfiles'

import {API_BASE_URL} from '../../config';


describe('fetchPetProfiles', () => {
    it('Should return the action', () => {
        const data = {data:'my pets'};
        const action = fetchPetProfiles(data);
        expect(action.type).toEqual(FETCH_PETS_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('fetchPetProfiles', () => {
    it('Should dispatch fetchPetSuccess after fetchPetProfiles', () => {
        const data = [{
            authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicmFpbiIsIm5hbWUiOiJOaWNlIFJhaW4ifSwiaWF0IjoxNTQ2NzM4ODY2LCJleHAiOjE1NDczNDM2NjYsInN1YiI6InJhaW4ifQ.dSgevVZJee2QZSGWX9UZ-zMQDhfoicxMcw4mUMV4S6w",
        }];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return data;
                }
            })
        );

        const dispatch = jest.fn();
        return fetchPetProfiles()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/pets/`,
            {
                'headers':{
                    'content-type':'application/json',
                    'Authorization':`Bearer ${null}`
                },
                'method':'GET'
            });
            expect(dispatch).toHaveBeenCalledWith(fetchPetBegin());
            expect(dispatch).toHaveBeenCalledWith(fetchPetSuccess(data));
        });
    });
});