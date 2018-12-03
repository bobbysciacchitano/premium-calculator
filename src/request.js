import Axios from 'axios';

const baseURL = 'https://jpa4t8yvij.execute-api.ap-southeast-2.amazonaws.com/production';

const Request = Axios.create({
    baseURL,
});

export default Request;
