import {getApi} from './axios';
import authApi from './authApi';

export default function initializeApis(jwt) {
  const api = getApi(jwt);
  authApi.setApi(api);
}
