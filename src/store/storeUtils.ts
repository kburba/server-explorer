/* eslint-disable camelcase */
import Axios from 'axios';
import { LoginRequest } from './types/authTypes';

export function loginApi(authParams: LoginRequest): Promise<any> {
  return Axios.post('/api/auth/login', authParams)
    .then((response) => response.data)
    .catch((errors) => {
      throw errors;
    });
}
