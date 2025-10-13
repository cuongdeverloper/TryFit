import axios from 'axios';
import NProgress from 'nprogress';
// import { store } from '../redux/store';


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true,
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // const state = store.getState();
        // const accessToken = state.user.account.access_token;
        // if (accessToken && isTokenExpired(accessToken)) {
        //     window.location.href = '/signin';
        //     return Promise.reject(new Error('Access token expired'));
        // }

        // if (accessToken) {
        //     config.headers['Authorization'] = 'Bearer ' + accessToken;
        // }

        NProgress.start();
        return config;
    },
    function (error) {
        NProgress.done(); // Stop NProgress on request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    NProgress.done();

    // Nếu là blob => trả response gốc (giữ nguyên response.data là blob)
    if (response.request?.responseType === "blob") {
      return response;
    }

    // Mặc định cho các request khác (JSON)
    return response && response.data ? response.data : response;
  },
  function (error) {
    NProgress.done();
    if (error.response && error.response.data?.errorCode === -999) {
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);


export default instance;
