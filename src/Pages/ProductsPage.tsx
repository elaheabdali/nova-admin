import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Plus, Search } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchProducts } from '../Redux/catalogSlice';
import { Button, Card, Input, PageTitle, Table, TableWrap } from '../Shared/primitives';
import { EmptyView, ErrorView, LoadingView } from '../Shared/StatusView';
import { useTranslation } from '../Shared/useTranslation';
import { ROUTES } from '../Routes/routePaths';

const SearchBox = styled.div`position:relative;max-width:400px;margin-bottom:20px;svg{position:absolute;right:13px;top:13px;color:${({theme})=>theme.colors.muted}} input{padding-right:40px}`;
const ProductCell = styled.div`display:flex;align-items:center;gap:13px;min-width:240px;img{width:48px;height:48px;object-fit:contain;background:#fff;border:1px solid #edf0f4;border-radius:9px;padding:5px}strong{font-size:12px;max-width:280px;line-height:1.7}`;
const Category = styled.span`padding:6px 9px;border-radius:20px;background:${({theme})=>theme.colors.accentSoft};color:${({theme})=>theme.colors.accent};font-size:11px;`;

export function ProductsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const t = useTranslation();
  const {items,loading,error,loaded} = useAppSelector(s=>s.products);
  const [query,setQuery]=useState('');
  const filtered=useMemo(()=>items.filter(p=>`${p.title} ${p.category}`.toLowerCase().includes(query.toLowerCase())),[items,query]);
  useEffect(()=>{if(!loaded) void dispatch(fetchProducts());},[dispatch,loaded]);
  const reload=()=>void dispatch(fetchProducts());
  return <>
    <PageTitle><div><h1>{t('products')}</h1><p>{t('productsSubtitle')}</p></div><Button onClick={() => navigate(ROUTES.createProduct)}><Plus size={17}/>{t('createProduct')}</Button></PageTitle>
    <SearchBox><Search size={17}/><Input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t('searchProducts')}/></SearchBox>
    <Card>
      {loading ? <LoadingView/> : error ? <ErrorView message={error} onRetry={reload}/> : filtered.length===0 ? <EmptyView/> :
        <TableWrap><Table><thead><tr><th>{t('productName')}</th><th>{t('category')}</th><th>{t('price')}</th><th>{t('id')}</th></tr></thead><tbody>{filtered.map(p=><tr key={p.id}><td><ProductCell><img src={p.image} alt={p.title} loading="lazy"/><strong>{p.title}</strong></ProductCell></td><td><Category>{p.category}</Category></td><td>{p.price.toLocaleString(undefined,{style:'currency',currency:'USD'})}</td><td><span style={{color:'#8a96a8'}}>#{p.id}</span></td></tr>)}</tbody></Table></TableWrap>}
    </Card>
  </>;
}
