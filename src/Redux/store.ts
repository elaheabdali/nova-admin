import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productsReducer from './catalogSlice';
import usersReducer from './usersSlice';
import settingsReducer from './settingsSlice';
import { signedIn, signedOut } from './authSlice';
import { authStorage } from '../Storage/authStorage';

const authListener = createListenerMiddleware();
<<<<<<< HEAD
authListener.startListening({
  actionCreator: signedIn,
  effect: (action) => {
    authStorage.setToken(action.payload);
  },
});
authListener.startListening({
  actionCreator: signedOut,
  effect: () => {
    authStorage.clear();
  },
});

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    users: usersReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(authListener.middleware),
=======
authListener.startListening({ actionCreator: signedIn, effect: (action) => { authStorage.setToken(action.payload); } });
authListener.startListening({ actionCreator: signedOut, effect: () => { authStorage.clear(); } });

export const store = configureStore({
  reducer: { auth: authReducer, products: productsReducer, users: usersReducer, settings: settingsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(authListener.middleware),
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
