import {ApiConstant} from '@/constants';
import axios, {AxiosInstance, AxiosResponse} from 'axios';

const defaultConfig = (headers: any) => ({
  baseURL: ApiConstant.BASE_URL,
  headers: {...headers},
  timeout: ApiConstant.TIMEOUT,
});

const defaultConfigInterceptors = (axiosClient: AxiosInstance) => {
  axiosClient.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    (res: any) => Promise.reject(res.response?.data),
  );
  return axiosClient;
};

const ApiClient = defaultConfigInterceptors(
  axios.create(defaultConfig(ApiConstant.HEADER_DEFAULT)),
);

export default ApiClient;
