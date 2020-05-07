import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { signInSuccess } from './actions';
import history from '../../../services/history';

export function* signIn({ payload }){
    const { email, password } = payload;
    
    const response = yield call(api.post, '/login', {
        email, 
        password
    });
    
    const { token, user } = response.data;
    
    yield put(signInSuccess(token, user));
    
    history.push('/registro');
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);
