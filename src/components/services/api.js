import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = token => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  instance.defaults.headers.Authorization = '';
};

export const userSignUp = async userData => {
  const { data } = await instance.post('/users/signup', userData);
  setToken(data.token);
  return data;
};

export const userLogIn = async userData => {
  const { data } = await instance.post('/users/login', userData);
  setToken(data.token);

  return data;
};

export const userLogOut = async () => {
  const { data } = await instance.post('/users/logout');
  clearToken();
  return data;
};

export const currentUser = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};
export const postContact = async user => {
  const { data } = await instance.post('/contacts', user);
  return data;
};

export const deleteContact = async userID => {
  const { data } = await instance.delete(`/contacts/${userID}`);
  return data;
};
