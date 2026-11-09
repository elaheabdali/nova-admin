import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { min-height: 100%; margin: 0; }
  body { font-family: Vazirmatn, Tahoma, Arial, sans-serif; background: ${({ theme }) => theme.colors.bg}; color: ${({ theme }) => theme.colors.text}; }
  button, input, select, textarea { font: inherit; }
  button { cursor: pointer; }
  a { color: inherit; text-decoration: none; }
  ::selection { background: ${({ theme }) => theme.colors.accentSoft}; }
`;
