import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {LeaguesResponseType} from '../models';
import {BASE_URL, TOKEN} from '../constants';

//I have this config here, but we can request this information from Serverless functions in AWS, Azure.
const options = {
  Accept: 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};

export const leaguesApi = createApi({
  reducerPath: 'leaguesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    headers: options,
  }),
  endpoints: builder => ({
    getLeagues: builder.query<LeaguesResponseType, void>({
      query: () => 'leagues',
    }),
  }),
});

export const {useGetLeaguesQuery} = leaguesApi;
