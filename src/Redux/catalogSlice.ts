import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product, ProductInput, AsyncState } from '../types';
import { productService } from '../Utils/services/productService';

interface ProductsState extends AsyncState {
  items: Product[];
  temporaryItems: Product[];
  loaded: boolean;
}
const initialState: ProductsState = { items: [], temporaryItems: [], loaded: false, loading: false, error: null };

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
export const createProduct = createAsyncThunk('products/create', (input: ProductInput) => productService.create(input));

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addTemporaryProduct(state, action: PayloadAction<Product>) {
      state.temporaryItems = [action.payload, ...state.temporaryItems.filter((item) => item.id !== action.payload.id)];
      state.items = [action.payload, ...state.items.filter((item) => item.id !== action.payload.id)];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        const temporaryIds = new Set(state.temporaryItems.map((item) => item.id));
        state.items = [...state.temporaryItems, ...action.payload.filter((item) => !temporaryIds.has(item.id))];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Request failed';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.temporaryItems = [action.payload, ...state.temporaryItems.filter((item) => item.id !== action.payload.id)];
        state.items = [action.payload, ...state.items.filter((item) => item.id !== action.payload.id)];
      });
  },
});

export const { addTemporaryProduct } = productsSlice.actions;
export default productsSlice.reducer;
