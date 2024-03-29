import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './featuras/cart/cartSlice';
import productSlice from './featuras/product/productSlice';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
