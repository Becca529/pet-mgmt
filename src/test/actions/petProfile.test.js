import {fetchPetsBegin, fetchPetProfiles, fetchPetError, fetchPetsError, fetchPetsSuccess, fetchPetSuccess, FETCH_PETS_SUCCESS, FETCH_PETS_BEGIN, FETCH_PETS_ERROR, 
    createPetProfileError, createPetProfileSuccess, FETCH_PET_BEGIN, FETCH_PET_SUCCESS, FETCH_PET_ERROR, 
    CREATE_PET_PROFILE_SUCCESS, CREATE_PET_PROFILE_ERROR, fetchPetBegin } 
from '../../../src/actions/petProfiles'
import {createVeterinarianSuccess, CREATE_VETERINARIAN_SUCCESS, createVeterinarianError, CREATE_VETERINARIAN_ERROR } from '../../../src/actions/veterinarians'
import {API_BASE_URL} from '../../config';



describe('fetchPetsSuccess', () => {
    it('should return the action', () => {
        const pets = {pets: []};
        const action = fetchPetsSuccess(pets);
        expect(action.type).toEqual(FETCH_PETS_SUCCESS);
        expect(action.pets).toEqual(pets);
    });
});


describe('fetchPetsBegin', () => {
    it('should return the action', () => {
        const action = fetchPetsBegin();
        expect(action.type).toEqual(FETCH_PETS_BEGIN);
    });
});

describe('fetchPetsError', () => {
    it('should return the action', () => {
        const err = 'some error';
        const action = fetchPetsError(err);
        expect(action.type).toEqual(FETCH_PETS_ERROR);
        expect(action.error).toEqual(err);
    });
});

describe('fetchPetSuccess', () => {
    it('should return the action', () => {
        const pet = [];
        const action = fetchPetSuccess(pet);
        expect(action.type).toEqual(FETCH_PET_SUCCESS);
        expect(action.pet).toEqual(pet);
    });
});

describe('fetchPetBegin', () => {
    it('should return the action', () => {
        const action = fetchPetBegin();
        expect(action.type).toEqual(FETCH_PET_BEGIN);
    });
});

describe('fetchPetError', () => {
    it('should return the action', () => {
        const err = 'some error';
        const action = fetchPetError(err);
        expect(action.type).toEqual(FETCH_PET_ERROR);
        expect(action.error).toEqual(err);
    });
});


describe('createPetProfileError', () => {
    it('should return the action', () => {
        const err = 'some error';
        const action = createPetProfileError(err);
        expect(action.type).toEqual(CREATE_PET_PROFILE_ERROR);
        expect(action.error).toEqual(err);
    });
});

describe('createPetProfileSuccess', () => {
    it('should return the action', () => {
        const pet = [];
        const action = createPetProfileSuccess(pet);
        expect(action.type).toEqual(CREATE_PET_PROFILE_SUCCESS);
        expect(action.pet).toEqual(pet);
    });
});

//Create Vet
describe('createVetSuccess', () => {
    it('should return the action', () => {
        const pet = [];
        const action = createVeterinarianSuccess(pet);
        expect(action.type).toEqual(CREATE_VETERINARIAN_SUCCESS);
        expect(action.pet).toEqual(pet);
    });
});

describe('createVetError', () => {
    it('should return the action', () => {
        const err = 'some error';
        const action = createVeterinarianError(err);
        expect(action.type).toEqual(CREATE_VETERINARIAN_ERROR);
        expect(action.error).toEqual(err);
    });
});


// describe('fetchPetProfiles', () => {
//     it('should dispatch fetchProfilesBegin and fetchProfilesSuccess', () => {
//         const expectedApiUrl = `${API_BASE_URL}/pets`;
//         const expectedHeaders = {"headers": {"map": {"authorization": "Bearer null", "content-type": "application/json"}}, "method": "get"};
//         const pets = {mock: true};

//         global.fetch = jest.fn().mockImplementation(() => {
//             return Promise.resolve({
//                 ok: true,
//                 json() {
//                     return pets;
//                 }
//             })
//         });

//         const dispatch = jest.fn();

//         return fetchPetProfiles()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith(expectedApiUrl, expectedHeaders);
//             expect(dispatch).toHaveBeenCalledWith(fetchPetProfiles());
//             expect(dispatch).toHaveBeenCalledWith(fetchPetSuccess(pets))
//         })
//     });
// });


