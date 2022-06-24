import includes from "validator/es/lib/util/includes";

const axios = require('axios');

const getBaseUrl = () => {
    return "https://fuck-you-back.anakim.space/";
    // return "http://127.0.0.1:8000/";
};

const http = axios.create({
    baseURL: getBaseUrl(),
    timeout: 5000,
    headers: {
        'X-Requested-Width': 'XMLHttpRequest',
    },
    withCredentials: true,

});
/*axiosInstance.get('test')
    .catch(err => {
        console.log(err.request._header)
    });*/
export default http;