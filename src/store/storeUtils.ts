import Axios, { AxiosRequestConfig } from 'axios';
import { history } from './configureStore';
import { LoginRequest } from './types/auth.types';

export function loginApi(authParams: LoginRequest): Promise<any> {
  return Axios.post('/v1/tokens', authParams)
    .then((response) => response.data)
    .catch((errors) => {
      throw errors;
    });
}

export function apiFetch(url: string, otherParams?: AxiosRequestConfig) {
  return Axios.request({
    url,
    headers: {
      'Cache-Control': 'no-cache',
    },
    method: otherParams ? otherParams.method : 'GET',
    data: otherParams ? otherParams.data : null,
  })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((errors) => {
      if (errors.response.status === 401) {
        history.push('/login');
      }
      throw errors;
    });
}
