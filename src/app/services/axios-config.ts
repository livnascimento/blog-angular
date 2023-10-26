import { environment } from '../../environments/environment';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
