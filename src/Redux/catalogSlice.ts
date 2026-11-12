<<<<<<< HEAD
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
=======
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
import type { Product, ProductInput, AsyncState } from '../types';
import { productService } from '../Utils/services/productService';

interface ProductsState extends AsyncState {
  items: Product[];
  temporaryItems: Product[];
  loaded: boolean;
}
<<<<<<< HEAD
const initialState: ProductsState = {
  items: [],
  temporaryItems: [],
  loaded: false,
  loading: false,
  error: null,
};
=======
const initialState: ProductsState = { items: [], temporaryItems: [], loaded: false, loading: false, error: null };
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetch',
  () => productService.getAll(),
  {
    condition: (_, { getState }) => {
      const state = getState() as { products: ProductsState };
      return !state.products.loading && !state.products.loaded;
    },
  },
);
<<<<<<< HEAD
export const createProduct = createAsyncThunk(
  'products/create',
  (input: ProductInput) => productService.create(input),
);
=======
export const createProduct = createAsyncThunk('products/create', (input: ProductInput) => productService.create(input));
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addTemporaryProduct(state, action: PayloadAction<Product>) {
<<<<<<< HEAD
      state.temporaryItems = [
        action.payload,
        ...state.temporaryItems.filter((item) => item.id !== action.payload.id),
      ];
      state.items = [
        action.payload,
        ...state.items.filter((item) => item.id !== action.payload.id),
      ];
=======
      state.temporaryItems = [action.payload, ...state.temporaryItems.filter((item) => item.id !== action.payload.id)];
      state.items = [action.payload, ...state.items.filter((item) => item.id !== action.payload.id)];
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
    },
  },
  extraReducers(builder) {
    builder
<<<<<<< HEAD
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        const temporaryIds = new Set(
          state.temporaryItems.map((item) => item.id),
        );
        state.items = [
          ...state.temporaryItems,
          ...action.payload.filter((item) => !temporaryIds.has(item.id)),
        ];
=======
      .addCase(fetchProducts.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        const temporaryIds = new Set(state.temporaryItems.map((item) => item.id));
        state.items = [...state.temporaryItems, ...action.payload.filter((item) => !temporaryIds.has(item.id))];
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Request failed';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
<<<<<<< HEAD
        state.temporaryItems = [
          action.payload,
          ...state.temporaryItems.filter(
            (item) => item.id !== action.payload.id,
          ),
        ];
        state.items = [
          action.payload,
          ...state.items.filter((item) => item.id !== action.payload.id),
        ];
=======
        state.temporaryItems = [action.payload, ...state.temporaryItems.filter((item) => item.id !== action.payload.id)];
        state.items = [action.payload, ...state.items.filter((item) => item.id !== action.payload.id)];
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
      });
  },
});

export const { addTemporaryProduct } = productsSlice.actions;
export default productsSlice.reducer;
