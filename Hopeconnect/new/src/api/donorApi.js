import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api/auth',
});

export const registerDonor = (data) =>
  API.post('/donor-register', data);

export const loginDonor = (data) =>
  API.post('/donor-login', data); 

