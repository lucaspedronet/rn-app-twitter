import axios from 'axios';

const api = axios.create({
  baseURL: 'https://10.0.3.2:3000',
});

export default api;
