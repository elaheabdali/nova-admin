<<<<<<< HEAD
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
=======
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
import type { AppDispatch, RootState } from './store';
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
