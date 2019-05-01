import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-course-re-498c4.firebaseio.com/'
});

export default instance;
