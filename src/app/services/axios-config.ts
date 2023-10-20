import { environment } from '../../environments/environments';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
