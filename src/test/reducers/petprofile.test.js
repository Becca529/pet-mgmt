import {fetchPetsBegin, fetchPetError, fetchPetsError, fetchPetsSuccess, fetchPetSuccess, 
    createPetProfileError, createPetProfileSuccess, fetchPetBegin, clearPetDetail,} 
from '../../../src/actions/petProfiles'
import {createVeterinarianSuccess, createVeterinarianError} from '../../../src/actions/veterinarians'
import {petprofileReducer, initialState} from '../../../src/reducers/petprofile';



describe('petprofileReducer', () => {

    const petName1 = 'Jamers';
    const petName2 = 'Remy';
    const pet1 = {petName: petName1};
    const pet2 = {petName: petName2};
    const vetDetail1 = {clinicName: 'Cliffs Vet'}

    it('Should set the initial state when nothing is passed in', () => {
        const state = petprofileReducer(undefined, { type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = petprofileReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('fetchPetProfile ', () => {
        it('Should add users pets to petlist array in state', () => {
            let currentState = {};
             const state = petprofileReducer(currentState, fetchPetsSuccess(pet2));
             expect(state.petList).toEqual(pet2);
        });

        it('Should change to loading when fetchPetsbegin', () => {
            let currentState = {
                loading: false
            };
             const state = petprofileReducer(currentState, fetchPetsBegin());
             expect(state.loading).toEqual(true);
        });

        it('Should add errors to state if issue', () => {
            let currentState = {
                error: null
            };
            const err = 'some error'
             const state = petprofileReducer(currentState, fetchPetsError(err));
             expect(state.error).toEqual(err);
        });

    });

    describe('createPetProfile ', () => {
        it('Should add new pet to petlist array in state', () => {
            let currentState = {
                petList: []
            };
             const state = petprofileReducer(currentState, createPetProfileSuccess(pet1));
             expect(state.petList).toEqual([...currentState.petList, pet1]);
        });

        it('Should add errors to state if issue', () => {
            let currentState = {
                error: null
            };
            const err = 'some error'
            const state = petprofileReducer(currentState, createPetProfileError(err));
            expect(state.error).toEqual(err);
        });
    });


    describe('fetchPetProfile', () => {
        it('Should add pet to current pet in state', () => {
            let currentState = {
                currentPet: null
            };
            const state = petprofileReducer(currentState, fetchPetSuccess(pet1));
            expect(state.currentPet).toEqual(pet1);
        });

        it('Should change to loading when fetchPetbegin', () => {
            let currentState = {
                loading: false
            };
             const state = petprofileReducer(currentState, fetchPetBegin());
             expect(state.loading).toEqual(true);
        });

        it('Should add errors to state if issue', () => {
            let currentState = {
                error: null
            };
            const err = 'some error'
             const state = petprofileReducer(currentState, fetchPetError(err));
             expect(state.error).toEqual(err);
        });

    });

    describe('add vet', () => {
        it('Should add pet to current pet in state', () => {
            let currentState = {
                currentPet: null
            };
            const state = petprofileReducer(currentState, createVeterinarianSuccess(pet1));
            expect(state.currentPet).toEqual(pet1);
        });

        it('Should add errors to state if issue', () => {
            let currentState = {
                error: null
            };
            const err = 'some error'
             const state = petprofileReducer(currentState, createVeterinarianError(err));
             expect(state.error).toEqual(err);
        });

    });

    describe('clearPetDetail ', () => {
        it('Should clear pet detail', () => {
            let currentState = {
                currentPetDetail: vetDetail1
            };
             const state = petprofileReducer(currentState, clearPetDetail());
             expect(state.currentPetDetail).toEqual([]);
        });
    });
    


    


    // describe('fetchPetsSuccess', () => {
    //     it('Should add all pets to state', () => {
    //         const currentState = {
    //             petList: {
    //                 petName: ['jamers', 'remy']
    //             },
    //             loading: true,
    //         };
    //         const data = 'my new pet';
    //         const state = petprofileReducer(currentState, fetchPetsSuccess(data));
    //         expect(state.petList.shareClasses).toEqual([...currentState.companyData.shareClasses, data]);
    //         expect(state.loading).toEqual(false);
    //     });
    // });


});

//     it('Should return the current state on an unknown action', () => {
//         let currentState = {};
//         const state = petprofileReducer(currentState, { type: '__UNKNOWN' });
//         expect(state).toBe(currentState);
//     });

//     describe('addPetSuccess', () => {
//         it('should =', () => {
//             const currentState = {
//                 companyData: {
//                     shareClasses: ['some value', 'some other value']
//                 },
//                 loading: true,
//                 redirect: false
//             };
//             const data = 'my new data';
//             const state = investmentReducer(currentState, addShareClassSuccess(data));
//             expect(state.companyData.shareClasses).toEqual([...currentState.companyData.shareClasses, data]);
//             expect(state.loading).toEqual(false);
//             expect(state.redirect).toEqual('/');
 
  