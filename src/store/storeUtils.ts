import Axios, { AxiosRequestConfig } from 'axios';
import { LoginRequest } from './types/auth.types';

export function loginApi(authParams: LoginRequest): Promise<any> {
  return Axios.post('/v1/tokens', authParams)
    .then((response) => response.data)
    .catch((errors) => {
      throw errors;
    });
}

export function apiFetch(
  url: string,
  otherParams?: AxiosRequestConfig
): Promise<any> {
  return Axios.request({
    url,
    headers: {
      'Cache-Control': 'no-cache',
    },
    method: otherParams ? otherParams.method : 'GET',
    data: otherParams ? otherParams.data : null,
  })
    .then((response) => response.data)
    .catch((errors) => {
      throw errors;
    });
}
