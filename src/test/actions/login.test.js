import  {login, AUTH_REQUEST, authRequest, AUTH_SUCCESS, authSuccess, AUTH_ERROR, authError} from '../../../src/actions/auth';

import {API_BASE_URL} from '../../config';


describe('authRequest', () => {
    it('should return the action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});

describe('authSuccess', () => {
    it('should return the action', () => {
        const action = authSuccess();
        expect(action.type).toEqual(AUTH_SUCCESS);
    });
});

describe('login', () => {
    describe('should dispatch authRequest and authSuccess after login', () => {
        const auth = [{
            authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMzZjVmZjBiMWU0YTc0ZmEwYzI5NTA3IiwiZmlyc3ROYW1lIjoiUmViZWNjYSIsImxhc3ROYW1lIjoiQ3JvdyIsImVtYWlsIjoicmRjcm93NTI5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiVGVzdFVzZXIxIn0sImlhdCI6MTU0NzY1NzIyNiwiZXhwIjoxNTQ4MjYyMDI2LCJzdWIiOiJUZXN0VXNlcjEifQ.57eN6H1wcZhWIBzFYVUdDOvCzeDS5-WaZNGH_MQn1M8",
        }];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return auth;
                }
            })
        );

        const dispatch = jest.fn();
        return login()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/login`,
            {
                "headers":{
                    "content-type":"application/json"
                },
                "body":undefined,
                "method":"POST"
            });
            expect(dispatch).toHaveBeenCalledWith(authRequest());
            expect(dispatch).toHaveBeenCalledWith(authSuccess());
        });
    });
});
