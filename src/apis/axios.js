import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1/';
var axiosInstance = null;
export function getApi(jwt) {
  axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 0,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: jwt,
    },
  });
  axiosInstance.cancelToken = axios.CancelToken;
  axiosInstance.isCancel = axios.isCancel;
  axiosInstance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  });
  return axiosInstance;
}
