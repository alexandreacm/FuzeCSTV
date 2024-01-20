import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {CustomError, MatchesResponseType, TeamsResponseType} from '../models';
import {BASE_URL, TOKEN} from '../constants';

//To do: I have this config here, but we can request this information from Serverless functions in AWS, Azure.
const options = {
  Accept: 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};

export const matchesApi = createApi({
  reducerPath: 'matchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    headers: options,
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  endpoints: builder => ({
    getLeagues: builder.query<MatchesResponseType, void>({
      query: () => 'csgo/matches?page=1&per_page=20&sort=-status, begin_at',
    }),
    getTeamsByAcronym: builder.query<TeamsResponseType, number[]>({
      query: ids => `csgo/teams?filter[id]=${ids}`,
    }),
  }),
});

export const {useGetLeaguesQuery, useGetTeamsByAcronymQuery} = matchesApi;
