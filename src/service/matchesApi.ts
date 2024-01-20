import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MatchesResponseType} from '../models';
import {BASE_URL, TOKEN} from '../constants';

//I have this config here, but we can request this information from Serverless functions in AWS, Azure.
const options = {
  Accept: 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};

export const matchesApi = createApi({
  reducerPath: 'matchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    headers: options,
  }),
  endpoints: builder => ({
    getLeagues: builder.query<MatchesResponseType, void>({
      query: () => 'csgo/matches?page=1&per_page=20&sort=-status, begin_at',
    }),
  }),
});

export const {useGetLeaguesQuery} = matchesApi;
