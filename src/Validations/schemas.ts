import * as Yup from 'yup';

export const productSchema = Yup.object({
  title: Yup.string()
    .trim()
    .required('validationRequired')
    .min(3, 'validationRequired'),
  description: Yup.string().trim().required('validationRequired'),
  price: Yup.number()
    .typeError('invalidPrice')
    .positive('invalidPrice')
    .required('validationRequired'),
  title: Yup.string().trim().required('validationRequired').min(3, 'validationRequired'),
  description: Yup.string().trim().required('validationRequired'),
  price: Yup.number().typeError('invalidPrice').positive('invalidPrice').required('validationRequired'),
  category: Yup.string().required('validationRequired'),
  image: Yup.string().url('invalidUrl').required('validationRequired'),
});

export const userSchema = Yup.object({
  name: Yup.object({
    firstname: Yup.string().trim().required('validationRequired'),
    lastname: Yup.string().trim().required('validationRequired'),
  }),
  username: Yup.string()
    .trim()
    .min(3, 'validationRequired')
    .required('validationRequired'),
  username: Yup.string().trim().min(3, 'validationRequired').required('validationRequired'),
  email: Yup.string().email('invalidEmail').required('validationRequired'),
  password: Yup.string().min(6, 'minPassword').required('validationRequired'),
  phone: Yup.string().trim().required('validationRequired'),
});

export const loginSchema = Yup.object({
  username: Yup.string().required('validationRequired'),
  password: Yup.string().required('validationRequired'),
});
