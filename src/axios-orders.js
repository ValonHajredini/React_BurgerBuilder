import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://reactjs-ff0b0.firebaseio.com/',
    headers: {'X-Custom-Header': '*'}
});
export default instance;