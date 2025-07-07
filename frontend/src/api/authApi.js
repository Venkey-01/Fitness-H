import axios from 'axios';
const API = 'https://fitness-tracker-dih9.onrender.com/api/auth';

export const login = async (email, password) =>
  axios.post(`${API}/login`, { email, password });

export const register = async (email, password) =>
  axios.post(`${API}/register`, { email, password });
