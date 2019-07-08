import axios from 'axios';

export default axios.create({
	baseURL: 'http://ec2-52-20-218-77.compute-1.amazonaws.com:3001/api'
})