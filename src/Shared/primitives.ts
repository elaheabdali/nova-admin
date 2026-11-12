import styled, { css } from 'styled-components';

<<<<<<< HEAD
export const Button = styled.button<{
  $variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 42px;
  padding: 0 17px;
  border-radius: 11px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: 0.18s ease;
  ${({ $variant = 'primary', theme }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.colors.accent};
          color: #fff;
          &:hover {
            filter: brightness(0.96);
            transform: translateY(-1px);
          }
        `
      : $variant === 'secondary'
        ? css`
            background: ${theme.colors.surfaceAlt};
            color: ${theme.colors.text};
            border-color: ${theme.colors.border};
          `
        : $variant === 'danger'
          ? css`
              background: ${theme.colors.danger};
              color: #fff;
            `
          : css`
              background: transparent;
              color: ${theme.colors.muted};
              border-color: ${theme.colors.border};
            `}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
export const Input = styled.input`
  width: 100%;
  min-height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 0 13px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSoft};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;
export const Select = styled.select`
  width: 100%;
  min-height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 0 13px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
`;
export const Textarea = styled.textarea`
  width: 100%;
  min-height: 110px;
  resize: vertical;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 12px 13px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSoft};
  }
`;
export const Card = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 22px;
`;
export const PageTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
  h1 {
    margin: 0 0 8px;
    font-size: 25px;
    letter-spacing: -0.4px;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 13px;
  }
`;
export const Field = styled.div`
  display: grid;
  gap: 8px;
  min-width: 0;
  label {
    font-size: 13px;
    font-weight: 700;
  }
  small {
    color: ${({ theme }) => theme.colors.danger};
    font-size: 11px;
  }
`;
export const Alert = styled.div<{ $type?: 'success' | 'error' }>`
  padding: 13px 15px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.8;
  color: ${({ $type, theme }) => ($type === 'success' ? theme.colors.success : theme.colors.danger)};
  background: ${({ $type, theme }) => ($type === 'success' ? `${theme.colors.success}14` : `${theme.colors.danger}12`)};
  border: 1px solid
    ${({ $type, theme }) => ($type === 'success' ? `${theme.colors.success}44` : `${theme.colors.danger}44`)};
`;
export const TableWrap = styled.div`
  overflow-x: auto;
  width: 100%;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
  th {
    text-align: start;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.muted};
    font-weight: 700;
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }
  th,
  td {
    padding: 14px 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    vertical-align: middle;
  }
  td {
    font-size: 13px;
  }
  tbody tr:last-child td {
    border-bottom: 0;
  }
`;
export const EmptyState = styled.div`
  text-align: center;
  padding: 48px 20px;
  color: ${({ theme }) => theme.colors.muted};
  svg {
    margin-bottom: 12px;
    opacity: 0.65;
  }
=======
export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'ghost' | 'danger' }>`
  display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 42px; padding: 0 17px;
  border-radius: 11px; border: 1px solid transparent; font-weight: 700; transition: .18s ease;
  ${({ $variant = 'primary', theme }) => $variant === 'primary' ? css`background:${theme.colors.accent}; color:#fff; &:hover{filter:brightness(.96);transform:translateY(-1px)}` :
    $variant === 'secondary' ? css`background:${theme.colors.surfaceAlt};color:${theme.colors.text};border-color:${theme.colors.border};` :
    $variant === 'danger' ? css`background:${theme.colors.danger};color:#fff;` : css`background:transparent;color:${theme.colors.muted};border-color:${theme.colors.border};`}
  &:disabled { opacity: .6; cursor: not-allowed; transform: none; }
`;
export const Input = styled.input`
  width: 100%; min-height: 44px; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 10px;
  padding: 0 13px; background: ${({ theme }) => theme.colors.input}; color: ${({ theme }) => theme.colors.text}; outline: none;
  &:focus { border-color: ${({ theme }) => theme.colors.accent}; box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSoft}; }
  &::placeholder { color: ${({ theme }) => theme.colors.muted}; }
`;
export const Select = styled.select`
  width: 100%; min-height: 44px; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 10px;
  padding: 0 13px; background: ${({ theme }) => theme.colors.input}; color: ${({ theme }) => theme.colors.text}; outline: none;
`;
export const Textarea = styled.textarea`
  width: 100%; min-height: 110px; resize: vertical; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 10px;
  padding: 12px 13px; background: ${({ theme }) => theme.colors.input}; color: ${({ theme }) => theme.colors.text}; outline: none;
  &:focus { border-color: ${({ theme }) => theme.colors.accent}; box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSoft}; }
`;
export const Card = styled.section`
  background: ${({ theme }) => theme.colors.surface}; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 16px; padding: 22px;
`;
export const PageTitle = styled.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; margin-bottom: 24px;
  h1 { margin: 0 0 8px; font-size: 25px; letter-spacing: -.4px; }
  p { margin: 0; color: ${({ theme }) => theme.colors.muted}; font-size: 13px; }
`;
export const Field = styled.div`
  display: grid; gap: 8px; min-width: 0;
  label { font-size: 13px; font-weight: 700; }
  small { color: ${({ theme }) => theme.colors.danger}; font-size: 11px; }
`;
export const Alert = styled.div<{ $type?: 'success' | 'error' }>`
  padding: 13px 15px; border-radius: 10px; font-size: 13px; line-height: 1.8;
  color: ${({ $type, theme }) => $type === 'success' ? theme.colors.success : theme.colors.danger};
  background: ${({ $type, theme }) => $type === 'success' ? `${theme.colors.success}14` : `${theme.colors.danger}12`};
  border: 1px solid ${({ $type, theme }) => $type === 'success' ? `${theme.colors.success}44` : `${theme.colors.danger}44`};
`;
export const TableWrap = styled.div`overflow-x:auto; width:100%;`;
export const Table = styled.table`
  width:100%; border-collapse:collapse; min-width:760px;
  th { text-align:start; font-size:12px; color:${({theme})=>theme.colors.muted}; font-weight:700; background:${({theme})=>theme.colors.surfaceAlt}; }
  th,td { padding:14px 12px; border-bottom:1px solid ${({theme})=>theme.colors.border}; vertical-align:middle; }
  td { font-size:13px; }
  tbody tr:last-child td { border-bottom:0; }
`;
export const EmptyState = styled.div`
  text-align:center; padding:48px 20px; color:${({theme})=>theme.colors.muted};
  svg { margin-bottom:12px; opacity:.65; }
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
`;
