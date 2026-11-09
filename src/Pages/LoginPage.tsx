import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LockKeyhole, ShoppingBag, UserRound } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { signedIn } from '../Redux/authSlice';
import { authService } from '../Utils/services/authService';
import { loginSchema } from '../Validations/schemas';
import { AppLanguage } from '../types/Enums/AppLanguage';
import { setLanguage } from '../Redux/settingsSlice';
import { Button, Field, Input, Alert } from '../Shared/primitives';
import { useTranslation } from '../Shared/useTranslation';
import { ROUTES } from '../Routes/routePaths';

const Page = styled.main`min-height:100vh;display:grid;place-items:center;padding:28px;background:radial-gradient(circle at 18% 15%,#f9e6da 0,transparent 27%),${({theme})=>theme.colors.bg};`;
const Panel = styled.section`width:min(100%,440px);background:${({theme})=>theme.colors.surface};border:1px solid ${({theme})=>theme.colors.border};border-radius:24px;padding:38px;box-shadow:0 22px 70px #13243a12;`;
const Brand = styled.div`display:flex;align-items:center;justify-content:center;gap:9px;font-size:30px;font-weight:900;letter-spacing:1px;color:${({theme})=>theme.colors.primary};.bag{color:${({theme})=>theme.colors.accent}}`;
const Heading = styled.div`text-align:center;margin:25px 0 30px;h1{font-size:21px;margin:0 0 10px}p{font-size:12px;line-height:1.9;color:${({theme})=>theme.colors.muted};margin:0}`;
const FormBody = styled(Form)`display:grid;gap:17px;`;
const InputIcon = styled.div`position:relative;svg{position:absolute;inset-inline-start:13px;top:13px;color:${({theme})=>theme.colors.muted}} input{padding-inline-start:42px}`;
const Foot = styled.div`display:flex;justify-content:space-between;margin-top:23px;font-size:12px;color:${({theme})=>theme.colors.muted};button{border:0;background:none;color:${({theme})=>theme.colors.accent};font-weight:700}`;

export function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const t = useTranslation();
  const language = useAppSelector((state) => state.settings.language);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  return <Page><Panel>
    <Brand>NOVA <ShoppingBag className="bag" size={26}/></Brand>
    <Heading><h1>{t('welcome')}</h1><p>{t('loginSubtitle')}</p></Heading>
    <Formik initialValues={{username:'',password:''}} validationSchema={loginSchema} onSubmit={async(values)=>{
      setServerError(null);setSubmitting(true);
      try { const response = await authService.login(values); if (!response.token) throw new Error('Missing token'); dispatch(signedIn(response.token)); navigate(ROUTES.products,{replace:true}); }
      catch { setServerError(t('loginError')); } finally { setSubmitting(false); }
    }}>
      {({values,handleChange,handleBlur,errors,touched})=><FormBody>
        <Field><label htmlFor="username">{t('username')}</label><InputIcon><UserRound size={17}/><Input id="username" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} autoComplete="username" /></InputIcon>{touched.username && errors.username && <small>{t('validationRequired')}</small>}</Field>
        <Field><label htmlFor="password">{t('password')}</label><InputIcon><LockKeyhole size={17}/><Input id="password" name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete="current-password" /></InputIcon>{touched.password && errors.password && <small>{t('validationRequired')}</small>}</Field>
        {serverError && <Alert>{serverError}</Alert>}
        <Button type="submit" disabled={submitting}>{submitting ? t('loading') : t('login')}</Button>
      </FormBody>}
    </Formik>
    <Foot><span>NOVA Admin • FakeStoreAPI</span><button type="button" onClick={()=>dispatch(setLanguage(language === AppLanguage.Persian ? AppLanguage.English : AppLanguage.Persian))}>{language === AppLanguage.Persian ? t('english') : t('persian')}</button></Foot>
  </Panel></Page>;
}
