import {configureStore} from '@reduxjs/toolkit';
import {leaguesApi} from '../service/leaguesApi';

export const store = configureStore({
  reducer: {[leaguesApi.reducerPath]: leaguesApi.reducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(leaguesApi.middleware),
});
