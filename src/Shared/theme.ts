import type { DefaultTheme } from 'styled-components';
import { AppTheme } from '../types/Enums/AppTheme';

export const themes: Record<AppTheme, DefaultTheme> = {
  [AppTheme.Light]: {
    mode: AppTheme.Light,
    colors: { bg: '#f5f7fb', surface: '#ffffff', surfaceAlt: '#f7f8fc', text: '#17243a', muted: '#738096', border: '#e6eaf1', primary: '#142541', accent: '#f36b32', accentSoft: '#fff0e8', success: '#178a5b', danger: '#d94848', input: '#ffffff', sidebar: '#101d35' },
  },
  [AppTheme.Dark]: {
    mode: AppTheme.Dark,
    colors: { bg: '#0d1422', surface: '#151f31', surfaceAlt: '#1b2940', text: '#edf2fa', muted: '#a0aec0', border: '#2a3850', primary: '#e7edf8', accent: '#ff844b', accentSoft: '#482d24', success: '#48c78e', danger: '#ff7777', input: '#111b2c', sidebar: '#0a1220' },
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: AppTheme;
    colors: { bg: string; surface: string; surfaceAlt: string; text: string; muted: string; border: string; primary: string; accent: string; accentSoft: string; success: string; danger: string; input: string; sidebar: string; };
  }
}
