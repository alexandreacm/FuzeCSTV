import {configureStore} from '@reduxjs/toolkit';
import {matchesApi} from '../service/matchesApi';

export const store = configureStore({
  reducer: {[matchesApi.reducerPath]: matchesApi.reducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(matchesApi.middleware),
});
