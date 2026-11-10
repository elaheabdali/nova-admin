import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { min-height: 100%; margin: 0; }
  body { font-family: Vazirmatn, Tahoma, Arial, sans-serif; background: ${({ theme }) => theme.colors.bg}; color: ${({ theme }) => theme.colors.text}; }
  button, input, select, textarea { font: inherit; }
  button:not(:disabled), a[href], [role='button'], label[for], select, summary { cursor: pointer; }
  button:disabled { cursor: not-allowed; }
  button:focus-visible, a:focus-visible, select:focus-visible { outline: 3px solid ${({ theme }) => theme.colors.accent}66; outline-offset: 2px; }
  a { color: inherit; text-decoration: none; }
  ::selection { background: ${({ theme }) => theme.colors.accentSoft}; }
`;
