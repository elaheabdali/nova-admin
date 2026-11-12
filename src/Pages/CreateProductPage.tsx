import { useEffect, useState } from 'react';
import { Formik, Form, type FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { useAppDispatch } from '../Redux/hooks';
import { createProduct } from '../Redux/catalogSlice';
import { productService } from '../Utils/services/productService';
import type { ProductInput } from '../types';
import { productSchema } from '../Validations/schemas';
<<<<<<< HEAD
import {
  Alert,
  Button,
  Card,
  Field,
  Input,
  PageTitle,
  Select,
  Textarea,
} from '../Shared/primitives';
import { useTranslation } from '../Shared/useTranslation';
import { ROUTES } from '../Routes/routePaths';

const FormGrid = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  & .full {
    grid-column: 1/-1;
  }
  .footer {
    grid-column: 1/-1;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 8px;
  }
`;

export function CreateProductPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const t = useTranslation();
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryError, setCategoryError] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  useEffect(() => {
    productService
      .getCategories()
      .then(setCategories)
      .catch(() => setCategoryError(true));
  }, []);
  const initialValues: ProductInput = {
    title: '',
    description: '',
    price: 0,
    category: '',
    image: '',
  };
  const onSubmit = async (
    values: ProductInput,
    helpers: FormikHelpers<ProductInput>,
  ) => {
    setFeedback(null);
    try {
      await dispatch(
        createProduct({ ...values, price: Number(values.price) }),
      ).unwrap();
      setFeedback({ type: 'success', text: t('successProduct') });
      helpers.resetForm();
      setTimeout(() => navigate(ROUTES.products), 1100);
    } catch {
      setFeedback({ type: 'error', text: t('failed') });
    }
  };
  return (
    <>
      <PageTitle>
        <div>
          <h1>{t('createProduct')}</h1>
          <p>{t('productsSubtitle')}</p>
        </div>
        <Button $variant="secondary" onClick={() => navigate(ROUTES.products)}>
          <ArrowRight size={16} />
          {t('cancel')}
        </Button>
      </PageTitle>
      <Card>
        <Formik
          initialValues={initialValues}
          validationSchema={productSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <FormGrid>
              <Field>
                <label htmlFor="title">{t('title')}</label>
                <Input
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.title && errors.title && (
                  <small>{t(errors.title as never)}</small>
                )}
              </Field>
              <Field>
                <label htmlFor="price">{t('price')}</label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={values.price || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.price && errors.price && (
                  <small>{t(errors.price as never)}</small>
                )}
              </Field>
              <Field>
                <label htmlFor="category">{t('category')}</label>
                {categoryError ? (
                  <>
                    <Input
                      id="category"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t('category')}
                    />
                    <small>{t('categoryUnavailable')}</small>
                  </>
                ) : (
                  <Select
                    id="category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">{t('category')}</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                )}
                {touched.category && errors.category && (
                  <small>{t(errors.category as never)}</small>
                )}
              </Field>
              <Field>
                <label htmlFor="image">{t('image')}</label>
                <Input
                  id="image"
                  name="image"
                  type="url"
                  placeholder={t('imageUrl')}
                  value={values.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.image && errors.image && (
                  <small>{t(errors.image as never)}</small>
                )}
              </Field>
              <Field className="full">
                <label htmlFor="description">{t('description')}</label>
                <Textarea
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.description && errors.description && (
                  <small>{t(errors.description as never)}</small>
                )}
              </Field>
              {feedback && (
                <div className="full">
                  <Alert $type={feedback.type}>{feedback.text}</Alert>
                </div>
              )}
              <div className="footer">
                <Button
                  type="button"
                  $variant="secondary"
                  onClick={() => navigate(ROUTES.products)}
                >
                  {t('cancel')}
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t('loading')
                  ) : (
                    <>
                      <BadgeCheck size={16} />
                      {t('save')}
                    </>
                  )}
                </Button>
              </div>
            </FormGrid>
          )}
        </Formik>
      </Card>
    </>
  );
=======
import { Alert, Button, Card, Field, Input, PageTitle, Select, Textarea } from '../Shared/primitives';
import { useTranslation } from '../Shared/useTranslation';
import { ROUTES } from '../Routes/routePaths';

const FormGrid = styled(Form)`display:grid;grid-template-columns:1fr 1fr;gap:20px;& .full{grid-column:1/-1}.footer{grid-column:1/-1;display:flex;justify-content:flex-end;gap:10px;margin-top:8px}`;

export function CreateProductPage() {
  const dispatch=useAppDispatch(); const navigate=useNavigate(); const t=useTranslation();
  const [categories,setCategories]=useState<string[]>([]); const [categoryError,setCategoryError]=useState(false);
  const [feedback,setFeedback]=useState<{type:'success'|'error';text:string}|null>(null);
  useEffect(()=>{productService.getCategories().then(setCategories).catch(()=>setCategoryError(true));},[]);
  const initialValues:ProductInput={title:'',description:'',price:0,category:'',image:''};
  const onSubmit=async(values:ProductInput,helpers:FormikHelpers<ProductInput>)=>{
    setFeedback(null);
    try { await dispatch(createProduct({ ...values, price: Number(values.price) })).unwrap(); setFeedback({type:'success',text:t('successProduct')}); helpers.resetForm(); setTimeout(()=>navigate(ROUTES.products),1100); }
    catch { setFeedback({type:'error',text:t('failed')}); }
  };
  return <>
    <PageTitle><div><h1>{t('createProduct')}</h1><p>{t('productsSubtitle')}</p></div><Button $variant="secondary" onClick={() => navigate(ROUTES.products)}><ArrowRight size={16}/>{t('cancel')}</Button></PageTitle>
    <Card><Formik initialValues={initialValues} validationSchema={productSchema} onSubmit={onSubmit}>
      {({values,errors,touched,handleChange,handleBlur,isSubmitting})=><FormGrid>
        <Field><label htmlFor="title">{t('title')}</label><Input id="title" name="title" value={values.title} onChange={handleChange} onBlur={handleBlur}/>{touched.title&&errors.title&&<small>{t(errors.title as never)}</small>}</Field>
        <Field><label htmlFor="price">{t('price')}</label><Input id="price" name="price" type="number" min="0.01" step="0.01" value={values.price||''} onChange={handleChange} onBlur={handleBlur}/>{touched.price&&errors.price&&<small>{t(errors.price as never)}</small>}</Field>
        <Field><label htmlFor="category">{t('category')}</label>{categoryError ? <><Input id="category" name="category" value={values.category} onChange={handleChange} onBlur={handleBlur} placeholder={t('category')}/><small>{t('categoryUnavailable')}</small></> : <Select id="category" name="category" value={values.category} onChange={handleChange} onBlur={handleBlur}><option value="">{t('category')}</option>{categories.map(c=><option key={c} value={c}>{c}</option>)}</Select>}{touched.category&&errors.category&&<small>{t(errors.category as never)}</small>}</Field>
        <Field><label htmlFor="image">{t('image')}</label><Input id="image" name="image" type="url" placeholder={t('imageUrl')} value={values.image} onChange={handleChange} onBlur={handleBlur}/>{touched.image&&errors.image&&<small>{t(errors.image as never)}</small>}</Field>
        <Field className="full"><label htmlFor="description">{t('description')}</label><Textarea id="description" name="description" value={values.description} onChange={handleChange} onBlur={handleBlur}/>{touched.description&&errors.description&&<small>{t(errors.description as never)}</small>}</Field>
        {feedback&&<div className="full"><Alert $type={feedback.type}>{feedback.text}</Alert></div>}
        <div className="footer"><Button type="button" $variant="secondary" onClick={()=>navigate(ROUTES.products)}>{t('cancel')}</Button><Button type="submit" disabled={isSubmitting}>{isSubmitting?t('loading'): <><BadgeCheck size={16}/>{t('save')}</>}</Button></div>
      </FormGrid>}</Formik></Card>
  </>;
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
}
