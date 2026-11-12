import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { authStorage } from '../Storage/authStorage';

<<<<<<< HEAD
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}
const storedToken = authStorage.getToken();
const initialState: AuthState = {
  token: storedToken,
  isAuthenticated: Boolean(storedToken),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signedIn(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    signedOut(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
=======
interface AuthState { token: string | null; isAuthenticated: boolean; }
const storedToken = authStorage.getToken();
const initialState: AuthState = { token: storedToken, isAuthenticated: Boolean(storedToken) };

const authSlice = createSlice({
  name: 'auth', initialState,
  reducers: {
    signedIn(state, action: PayloadAction<string>) { state.token = action.payload; state.isAuthenticated = true; },
    signedOut(state) { state.token = null; state.isAuthenticated = false; },
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
  },
});
export const { signedIn, signedOut } = authSlice.actions;
export default authSlice.reducer;
