import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';
export const fetchDashboardSuccess = dashboard => ({
    type: FETCH_DASHBOARD_SUCCESS,
    dashboard
});

export const FETCH_DASHBOARD_ERROR = 'FETCH_DASHBOARD_ERROR';
export const fetchDashboardError = error => ({
    type: FETCH_DASHBOARD_ERROR,
    error
});

export const fetchDashboard = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/pets`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({dashboard}) => dispatch(fetchDashboardSuccess(dashboard)))
        .catch(err => {
            dispatch(fetchDashboardError(err));
        });
};