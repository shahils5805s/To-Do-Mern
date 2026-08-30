import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/tasks';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const getTasks = async () => {
  const { data } = await api.get('/');
  return data;
};

export const createTask = async (title) => {
  const { data } = await api.post('/', { title });
  return data;
};

export const updateTask = async (id, updates) => {
  const { data } = await api.put(`/${id}`, updates);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await api.delete(`/${id}`);
  return data;
};
