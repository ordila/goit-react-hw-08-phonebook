import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUser,
  deleteContact,
  getContacts,
  postContact,
  setToken,
  userLogIn,
  userLogOut,
  userSignUp,
} from 'components/services/Api.js';

export const requestContactsThunk = createAsyncThunk(
  'contact/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContactsThunk = createAsyncThunk(
  'contacts/postContacts',
  async (dataContact, thunkAPI) => {
    try {
      const response = await postContact(dataContact);
      console.log('response', response);
      return response;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContact(id);
      return response;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);
//================================================================
export const signUpUserThunk = createAsyncThunk(
  'user/signUpUser',
  async (userData, thunkAPI) => {
    try {
      const response = await userSignUp(userData);
      return response;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'user/loginUser',
  async (userData, thunkAPI) => {
    try {
      const response = await userLogIn(userData);
      return response;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);

export const userLogOutThunk = createAsyncThunk(
  'user/logOut',
  async (_, thunkAPI) => {
    try {
      const responce = await userLogOut();
      return responce;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);
export const currentUserThunk = createAsyncThunk(
  'user/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    if (!token) return;
    try {
      setToken(token);

      const responce = await currentUser(token);
      return responce;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);
