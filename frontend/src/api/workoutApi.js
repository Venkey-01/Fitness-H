import axios from 'axios';
const API = 'https://fitness-tracker-dih9.onrender.com/api/workouts';

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export const fetchWorkouts = () => axios.get(API, getHeaders());
export const addWorkout = (data) => axios.post(API, data, getHeaders());
export const updateWorkout = (id, data) => axios.put(`${API}/${id}`, data, getHeaders());
export const deleteWorkout = (id) => axios.delete(`${API}/${id}`, getHeaders());
