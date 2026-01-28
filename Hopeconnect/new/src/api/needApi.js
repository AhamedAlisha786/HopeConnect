import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api/auth',
});

export const createNeed = (data) => 
  API.post('/create-need', data);

export const createSuccessStory = (data) =>
  API.post('/create-successstory', data);