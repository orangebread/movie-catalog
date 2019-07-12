import axios from 'axios';

const host = process.env.REACT_APP_ENVIRONMENT ? process.env.REACT_APP_ENVIRONMENT : 'http://localhost:3001/api';
export default axios.create({
	baseURL: host
})