import  {registerUser,} from '../../../src/actions/users';

import {API_BASE_URL} from '../../config';


// describe('registerSuccess', () => {
//     it('Should return the action', () => {
//         const action = registerSuccess();
//         expect(action.type).toEqual(REGISTER_SUCCESS);
//     });
// });

// describe('registerUser', () => {
//     it('Should dispatch registerSuccess after registerUser', () => {
        
//         //Simple body return
//         const auth = [{
//             authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMzZjVmZjBiMWU0YTc0ZmEwYzI5NTA3IiwiZmlyc3ROYW1lIjoiUmViZWNjYSIsImxhc3ROYW1lIjoiQ3JvdyIsImVtYWlsIjoicmRjcm93NTI5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiVGVzdFVzZXIxIn0sImlhdCI6MTU0NzY1NzIyNiwiZXhwIjoxNTQ4MjYyMDI2LCJzdWIiOiJUZXN0VXNlcjEifQ.57eN6H1wcZhWIBzFYVUdDOvCzeDS5-WaZNGH_MQn1M8",
//         }];

//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return auth;
//                 }
//             })
//         );

//         const values = undefined;

//         const dispatch = jest.fn();
//         return registerUser (values)(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`,
//             {
//                 "headers":{
//                     "content-type":"application/json"
//                 },
//                 "body":undefined,
//                 "method":"POST"
//             });
//             expect(dispatch).toHaveBeenCalledWith(registerRequest());
//             expect(dispatch).toHaveBeenCalledWith(registerSuccess());
//         });
//     });
// });