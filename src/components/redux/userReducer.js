import {
  currentUserThunk,
  loginUserThunk,
  signUpUserThunk,
  userLogOutThunk,
} from './thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isLoading: false,
  userData: null,
  error: null,
  token: null,
};

const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpUserThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signUpUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signUpUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUserThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userLogOutThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userLogOutThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.userData = null;
        state.token = null;
      })
      .addCase(userLogOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(currentUserThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.userData = action.payload;
      })
      .addCase(currentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const userReducer = userSlicer.reducer;
