import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { StoreUser, UserInput, AsyncState } from '../types';
import { userService } from '../Utils/services/userService';

interface UsersState extends AsyncState {
  items: StoreUser[];
  temporaryItems: StoreUser[];
  loaded: boolean;
}
const initialState: UsersState = {
  items: [],
  temporaryItems: [],
  loaded: false,
  loading: false,
  error: null,
};
const initialState: UsersState = { items: [], temporaryItems: [], loaded: false, loading: false, error: null };

export const fetchUsers = createAsyncThunk<StoreUser[]>(
  'users/fetch',
  () => userService.getAll(),
  {
    condition: (_, { getState }) => {
      const state = getState() as { users: UsersState };
      return !state.users.loading && !state.users.loaded;
    },
  },
);
export const createUser = createAsyncThunk('users/create', (input: UserInput) =>
  userService.create(input),
);
export const createUser = createAsyncThunk('users/create', (input: UserInput) => userService.create(input));

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addTemporaryUser(state, action: PayloadAction<StoreUser>) {
      state.temporaryItems = [
        action.payload,
        ...state.temporaryItems.filter((item) => item.id !== action.payload.id),
      ];
      state.items = [
        action.payload,
        ...state.items.filter((item) => item.id !== action.payload.id),
      ];
      state.temporaryItems = [action.payload, ...state.temporaryItems.filter((item) => item.id !== action.payload.id)];
      state.items = [action.payload, ...state.items.filter((item) => item.id !== action.payload.id)];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        const temporaryIds = new Set(
          state.temporaryItems.map((item) => item.id),
        );
        state.items = [
          ...state.temporaryItems,
          ...action.payload.filter((item) => !temporaryIds.has(item.id)),
        ];
      .addCase(fetchUsers.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        const temporaryIds = new Set(state.temporaryItems.map((item) => item.id));
        state.items = [...state.temporaryItems, ...action.payload.filter((item) => !temporaryIds.has(item.id))];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Request failed';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.temporaryItems = [
          action.payload,
          ...state.temporaryItems.filter(
            (item) => item.id !== action.payload.id,
          ),
        ];
        state.items = [
          action.payload,
          ...state.items.filter((item) => item.id !== action.payload.id),
        ];
        state.temporaryItems = [action.payload, ...state.temporaryItems.filter((item) => item.id !== action.payload.id)];
        state.items = [action.payload, ...state.items.filter((item) => item.id !== action.payload.id)];
      });
  },
});

export const { addTemporaryUser } = usersSlice.actions;
export default usersSlice.reducer;
