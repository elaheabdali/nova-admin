import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AppLanguage } from '../types/Enums/AppLanguage';
import { AppTheme } from '../types/Enums/AppTheme';

<<<<<<< HEAD
interface SettingsState {
  language: AppLanguage;
  theme: AppTheme;
}
const initialState: SettingsState = {
  language: AppLanguage.Persian,
  theme: AppTheme.Light,
};
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<AppLanguage>) {
      state.language = action.payload;
    },
    setTheme(state, action: PayloadAction<AppTheme>) {
      state.theme = action.payload;
    },
=======
interface SettingsState { language: AppLanguage; theme: AppTheme; }
const initialState: SettingsState = { language: AppLanguage.Persian, theme: AppTheme.Light };
const settingsSlice = createSlice({
  name: 'settings', initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<AppLanguage>) { state.language = action.payload; },
    setTheme(state, action: PayloadAction<AppTheme>) { state.theme = action.payload; },
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
  },
});
export const { setLanguage, setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
