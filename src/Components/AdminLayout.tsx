import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BadgePlus, Boxes, Languages, LogOut, Moon, Sun, Users, ShoppingBag } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setLanguage, setTheme } from '../Redux/settingsSlice';
import { signedOut } from '../Redux/authSlice';
import { AppLanguage } from '../types/Enums/AppLanguage';
import { AppTheme } from '../types/Enums/AppTheme';
import { ROUTES } from '../Routes/routePaths';
import { useTranslation } from '../Shared/useTranslation';

const Shell = styled.div`min-height:100vh;`;
const Sidebar = styled.aside`
  position:fixed; inset-block:0; inset-inline-end:0; width:250px; padding:25px 18px; background:${({theme})=>theme.colors.sidebar}; color:#f8fafc; display:flex; flex-direction:column; z-index:5;
`;
const Logo = styled.div`display:flex;align-items:center;gap:10px;padding:0 8px 29px;font-size:23px;font-weight:900;letter-spacing:1px; .mark{color:#fff}.bag{color:#ff7b43}`;
const Nav = styled.nav`display:grid;gap:7px; margin-top:10px;`;
const NavItem = styled(NavLink)`display:flex;align-items:center;gap:12px;padding:12px 13px;border-radius:10px;color:#bdc8d9;font-size:13px;transition:.15s;&.active,&:hover{background:#263c5d;color:#fff}&.active{box-shadow:inset -3px 0 #ff7b43}`;
const SidebarBottom = styled.div`margin-top:auto;display:grid;gap:12px;`;
const SideToggle = styled.button`border:1px solid #32435d;background:transparent;color:#d9e2f1;border-radius:9px;padding:10px;display:flex;align-items:center;gap:8px;`;
const Main = styled.main`margin-inline-end:250px;min-height:100vh;`;
const Header = styled.header`height:76px;padding:0 34px;background:${({theme})=>theme.colors.surface};border-bottom:1px solid ${({theme})=>theme.colors.border};display:flex;align-items:center;justify-content:space-between;`;
const Content = styled.div`padding:32px 34px;max-width:1500px;margin:0 auto;`;
const IconButton = styled.button`border:1px solid ${({theme})=>theme.colors.border};background:${({theme})=>theme.colors.surfaceAlt};color:${({theme})=>theme.colors.text};width:39px;height:39px;border-radius:10px;display:grid;place-items:center;`;
const Toolbar = styled.div`display:flex;align-items:center;gap:10px;`;

export function AdminLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const t = useTranslation();
  const { language, theme } = useAppSelector((state) => state.settings);
  const onLogout = () => { dispatch(signedOut()); navigate(ROUTES.login, { replace: true }); };
  return <Shell>
    <Sidebar>
      <Logo><span className="mark">NOVA</span><ShoppingBag className="bag" size={22} /></Logo>
      <Nav>
        <NavItem to={ROUTES.products}><Boxes size={18}/>{t('products')}</NavItem>
        <NavItem to={ROUTES.createProduct}><BadgePlus size={18}/>{t('createProduct')}</NavItem>
        <NavItem to={ROUTES.users}><Users size={18}/>{t('users')}</NavItem>
        <NavItem to={ROUTES.createUser}><BadgePlus size={18}/>{t('createUser')}</NavItem>
      </Nav>
      <SidebarBottom>
        <SideToggle onClick={() => dispatch(setLanguage(language === AppLanguage.Persian ? AppLanguage.English : AppLanguage.Persian))}><Languages size={16}/>{t('language')}: {language === AppLanguage.Persian ? t('persian') : t('english')}</SideToggle>
        <SideToggle onClick={() => dispatch(setTheme(theme === AppTheme.Light ? AppTheme.Dark : AppTheme.Light))}>{theme === AppTheme.Light ? <Moon size={16}/> : <Sun size={16}/>} {t('theme')}: {theme === AppTheme.Light ? t('light') : t('dark')}</SideToggle>
        <SideToggle onClick={onLogout}><LogOut size={16}/>{t('logout')}</SideToggle>
      </SidebarBottom>
    </Sidebar>
    <Main>
      <Header><div><strong>{t('adminPanel')}</strong><div style={{fontSize:11,color:'#8b96a8',marginTop:5}}>{t('overview')}</div></div><Toolbar><IconButton title={t('theme')} onClick={() => dispatch(setTheme(theme === AppTheme.Light ? AppTheme.Dark : AppTheme.Light))}>{theme === AppTheme.Light ? <Moon size={17}/> : <Sun size={17}/>}</IconButton><span style={{fontSize:12,color:'inherit'}}>{t('greeting')}</span></Toolbar></Header>
      <Content><Outlet /></Content>
    </Main>
  </Shell>;
}
